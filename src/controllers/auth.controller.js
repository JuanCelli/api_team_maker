import genereteJwtToken from "../auth/utils/generateJwtToken.js"
import { dtoJwt } from "../dto/dto.auth.js"

export const register = async (req,res,next)=>{
    try {
        res.status(201).json({
            msj: "Usuario registrado con éxito",
            newUser: req.user
        })
    } catch (error) {
        next(error)
    }
}

export const login = async (req,res,next)=>{
    try {
        const maxAgeCookie = 1000*60*5
        const payloadUser = new dtoJwt(req.user)
        const jwt = genereteJwtToken({...payloadUser})
        res.cookie('jwtCookieToken', jwt,{maxAge:maxAgeCookie ,httpOnly: true})
        res.status(200).json({message: "Usuario logeado correctamente", jwtCookieToken:jwt})
    } catch (error) {
        next(error)
    }
}

export const failRegister = async (req,res,next)=>{
    try {
        res.status(400).json({error: "fail register"})
    } catch (error) {
        next(error)
    }
}

export const failLogin = async (req,res,next)=>{
    try {
        res.status(401).json({error: "fail login"})
    } catch (error) {
        next(error)
    }
}