import express from 'express'
import authRouter from './routers/auth.router.js'
import mongoose from 'mongoose'
import config from './config/config.js'
import initializePassport from './auth/passport.config.js'
import passport from 'passport'
import session from 'express-session'
import MongoStore from 'connect-mongo'


const PORT = config.port
const mongoUrlDb = config.urlMongo

const app = express()

initializePassport()

app.use(session(
    {
        store: MongoStore.create({
            mongoUrl: mongoUrlDb,
            mongoOptions:{useNewUrlParser:true, useUnifiedTopology:true},
            ttl: 60 * 10
        }),
        secret:"coderSecret",
        resave:false,
        saveUninitialized:true
    }
))
app.use(passport.session())

app.use(passport.initialize())
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