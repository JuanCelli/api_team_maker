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