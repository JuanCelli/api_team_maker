export const register = async (req,res)=>{
    try {
        res.status(201).json({
            msj: "Usuario registrado con éxito",
            newUser: req.user
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({error:"Internal"})
    }
}

export const failRegister = async (req,res)=>{
    try {
        res.status(400).json({error: "fail register"})
    } catch (error) {
        console.log(error)
        res.status(500).json({error:"Internal"})
    }
}