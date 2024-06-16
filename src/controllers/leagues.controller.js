import { dtoCreateLegue } from "../dto/dto.league.js"
import CustomError from "../errors/custom/CustomError.js"
import errorsEnum from "../errors/errors.enum.js"
import { leagueService, matchService } from "../services/service.js"




export const getLeagueById = async (req,res,next)=>{
    try{
        const {id} = req.params
        const league = await leagueService.getLeagueById(id)
        if(!league){
            CustomError.createError({
                code:errorsEnum.NOT_FOUND,
                message: "Liga no encontrada."
            })
        }
        res.status(200).json(league)
    }catch (error) {
        next(error)
    }
}

export const createLeague = async (req,res,next)=>{
    try{
        const data = new dtoCreateLegue(req.body,req.user._id)
        const newLeague = await leagueService.createLeague(data)
        if(!newLeague._id){
            CustomError.createError({
                code:errorsEnum.BAD_REQUEST,
                cause: newLeague,
                message: "Error al crear liga."
            })
        }
        res.status(201).json(newLeague)
    }catch (error) {
        next(error)
    }
}

export const addMatch = async (req,res,next)=>{
    try{
        const {idMatch, idLeague} = req.params
        const league = await leagueService.getLeagueById(idLeague)
        const match = await matchService.getMatchById(idMatch)

        if(!league){
            CustomError.createError({
                code: errorsEnum.NOT_FOUND,
                message: "La liga no ha sido encontrada."
            })
        }
        if(!match){
            CustomError.createError({
                code: errorsEnum.NOT_FOUND,
                message: "El partido no ha sido encontrado."
            })
        }

        if(league.matches.includes(idMatch)){
            CustomError.createError({
                code: errorsEnum.BAD_REQUEST,
                message: "El partido que intenta ingresar a la liga ya está ingresado."
            })
        }

        if(match.league){
            CustomError.createError({
                code: errorsEnum.BAD_REQUEST,
                message: "El partido que intenta ingresar a la liga ya está dentro de otra liga."
            })
        }
        
        const updateLeague = await leagueService.addMatch(idMatch,idLeague)
        
        if(!updateLeague?._id){
            CustomError.createError({
                code: errorsEnum.BAD_REQUEST,
                message: "El partido no ha sido ingresado a la liga correctamente.",
                cause: updateLeague
            })
        }
        res.status(200).json({mesagge:"Partido ingresado correctamente en liga", updateLeague:updateLeague})
    }catch (error) {
        next(error)
    }
}