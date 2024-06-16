import express from 'express'
import authRouter from './routers/auth.router.js'
import usersRouter from './routers/users.router.js'
import matchesRouter from './routers/matches.router.js'
import leaguesRouter from './routers/leagues.router.js'
import mongoose from 'mongoose'
import config from './config/config.js'
import initializePassport from './auth/passport.config.js'
import passport from 'passport'
import session from 'express-session'
import MongoStore from 'connect-mongo'
import ErrorHandler from './errors/middlewares/ErrorHandler.js'
import cookieParser from 'cookie-parser'



const PORT = config.port
const mongoUrlDb = config.urlMongo
const PRIVATE_KEY = config.privateKey

const app = express()
app.use(cookieParser())


initializePassport()

app.use(session(
    {
        store: MongoStore.create({
            mongoUrl: mongoUrlDb,
            ttl: 60 * 60
        }),
        secret:PRIVATE_KEY,
        resave:false,
        saveUninitialized:true
    }
))

app.use(passport.session())
app.use(passport.initialize())
app.use(express.json())

app.use("/auth",authRouter)
app.use("/users",usersRouter)
app.use("/matches",matchesRouter)
app.use("/leagues",leaguesRouter)

app.use(ErrorHandler)

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