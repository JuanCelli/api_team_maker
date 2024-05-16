import CustomError from "../errors/custom/CustomError.js"
import errorsEnum from "../errors/errors.enum.js"
import userService from "../services/dao/mongo/user.service.js"



export const getUserById = async (req,res,next)=>{
    try{
        const {id} = req.params
        const user = await userService.getUserById(id)
        if(!user){
            CustomError.createError({
                code:errorsEnum.NOT_FOUND,
                message: "Usuario no encontrado."
            })
        }
        res.status(200).json(user)
    }catch (error) {
        next(error)
    }
}

export const getUserByEmail = async (req,res,next)=>{
    try{
        const {email} = req.params
        const user = await userService.getUserByEmail(email)
        if(!user){
            CustomError.createError({
                code:errorsEnum.NOT_FOUND,
                message: "Usuario no encontrado."
            })
        }
        res.status(200).json(user)
    }catch (error) {
        next(error)
    }
}