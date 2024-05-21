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
        const match = await matchService.getMatchById(idMatch)

        if(!match){
            CustomError.createError({
                code: errorsEnum.NOT_FOUND,
                message: "El partido no ha sido encontrado."
            })
        }

        if(match.players.includes(id)){
            CustomError.createError({
                code: errorsEnum.BAD_REQUEST,
                message: "El jugador que intenta unirse ya está dentro del partido."
            })
        }

        const updateMatch = await matchService.joinPlayer(idMatch,id)

        if(!updateMatch?._id){
            CustomError.createError({
                code: errorsEnum.NOT_FOUND,
                message: "El jugador no ha sido encontrado.",
                cause: updateMatch
            })
        }
        res.status(200).json({mesagge:"Jugador unido con éxito", updateMatch:updateMatch})
    }catch (error) {
        next(error)
    }
}

export const removePlayer = async (req,res,next)=>{
    try{
        const {idMatch, id} = req.params
        const match = await matchService.getMatchById(idMatch)

        if(!match){
            CustomError.createError({
                code: errorsEnum.NOT_FOUND,
                message: "El partido no ha sido encontrado."
            })
        }

        if(!match.players.includes(id)){
            CustomError.createError({
                code: errorsEnum.BAD_REQUEST,
                message: "El jugador que quitar, no está unido al partido"
            })
        }

        if(match.creatorId==id){
            CustomError.createError({
                code: errorsEnum.BAD_REQUEST,
                message: "El jugador que quitar, es el administrador del partido, no puede ser expulsado del partido"
            })
        }

        const updateMatch = await matchService.removePlayer(idMatch,id)

        if(!updateMatch?._id){
            CustomError.createError({
                code: errorsEnum.NOT_FOUND,
                message: "El jugador no ha podido ser quitado del partido.",
                cause: updateMatch
            })
        }
        res.status(200).json({mesagge:"Jugador expulsado con éxito", updateMatch:updateMatch})
    }catch (error) {
        next(error)
    }
}


export const deleteMatch = async (req,res,next)=>{
    try{
        const {idMatch} = req.params
        const response = await matchService.deleteMatch(idMatch)

        if(response.deletedCount!==1){
            CustomError.createError({
                code: errorsEnum.NOT_FOUND,
                message: "El partido no se ha podido eliminar.",
                cause: "Partido no encontrado"
            })
        }
        res.status(200).json({mesagge:"Partido eliminado con éxito"})
    }catch (error) {
        next(error)
    }
}