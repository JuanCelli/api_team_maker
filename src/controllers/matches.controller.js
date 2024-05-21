import { dtoCreateMatch } from "../dto/dto.match.js"
import CustomError from "../errors/custom/CustomError.js"
import errorsEnum from "../errors/errors.enum.js"
import matchService from "../services/dao/mongo/match.service.js"



export const getMatchById = async (req,res,next)=>{
    try{
        const {idMatch} = req.params
        const match = await matchService.getMatchById(idMatch)
        if(!match){
            CustomError.createError({
                code:errorsEnum.NOT_FOUND,
                message: "Partido no encontrado."
            })
        }
        res.status(200).json(match)
    }catch (error) {
        next(error)
    }
}

export const createMatch = async (req,res,next)=>{
    try{
        const data = new dtoCreateMatch(req.body,req.user._id)
        const newMatch = await matchService.createMatch(data)
        if(!newMatch._id){
            CustomError.createError({
                code:errorsEnum.BAD_REQUEST,
                cause: newMatch,
                message: "Error al crear partido."
            })
        }
        res.status(201).json(newMatch)
    }catch (error) {
        next(error)
    }
}

export const joinPlayer = async (req,res,next)=>{
    try{
        const {idMatch, id} = req.params
        const updateMatch = await matchService.joinPlayer(idMatch,id)
        if(!updateMatch._id){
            CustomError.createError({
                code:errorsEnum.NOT_FOUND,
                message: "El jugador y/o el partido no han sido encontrado/s.",
                cause: updateMatch
            })
        }
        res.status(200).json({mesagge:"Jugador unido con éxito", updateMatch:newMatch})
    }catch (error) {
        next(error)
    }
}