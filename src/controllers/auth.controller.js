import { userService } from "../services/service.js"
import {dtoRegister} from '../dto/dto.auth.js'
export const Register = async (req,res)=>{
    try {
        const data =  new dtoRegister(req.body)
        const newUser = await userService.createUser(data)

        if(!newUser._id){
            throw {error:true, msj: "Error al intentar crear usuario", detail: newUser}
        }

        res.json(newUser)
    } catch (error) {
        console.log(error)
        res.status(500).json({error:"Internal"})
    }
}