import express from 'express'
import authRouter from './routers/auth.router.js'
import mongoose from 'mongoose'
import config from './config/config.js'

const PORT = config.port
const mongoUrlDb = config.urlMongo

const app = express()


app.use(express.json())

app.use("/auth",authRouter)


app.listen(PORT, ()=>{
    console.log(`Servidor inicializado en puerto ${PORT}`)
})

mongoose.connect(mongoUrlDb)
.then(()=>{
    console.log("Base de datos conectada")
})
.catch((error)=>{
    console.log(error)
})