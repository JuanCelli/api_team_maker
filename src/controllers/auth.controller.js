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

export const failRegister = async (req,res,next)=>{
    try {
        res.status(400).json({error: "fail register"})
    } catch (error) {
        next(error)
    }
}