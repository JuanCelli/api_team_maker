import mongoose from "mongoose";
import CustomError from "../errors/custom/CustomError.js";
import errorsEnum from "../errors/errors.enum.js";



export const validInputId = (req, res, next) => {
    try {
        const { id } = req.params
        if(id){
            if (!mongoose.Types.ObjectId.isValid(id)) {
                CustomError.createError({
                    message:"El ID ingresado no es valido",
                    code: errorsEnum.BAD_REQUEST,
                })
            }
        }
        next()
    } catch (error) {
        next(error)
    }
}