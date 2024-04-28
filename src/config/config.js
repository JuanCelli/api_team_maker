import dotenv from 'dotenv'
import path from 'path'
import rootDir from '../utils/rootDir.js'
import program from './process.js'


dotenv.config()

export const environment = program.opts().mode;

const switchEnviroment = (enviroment) =>{
    let envDir

    if(enviroment==="prod"){
        envDir = path.join(rootDir,".env.production")
    }else if(enviroment==="test"){
        envDir = path.join(rootDir,".env.test")
    }else{
        envDir = path.join(rootDir,".env.dev")
    }

    return envDir
}

dotenv.config({
    path: switchEnviroment(environment)
});

export default {
    environment:environment,
    port: process.env.PORT,
    urlMongo: process.env.MONGO_URL,
    adminName: process.env.ADMIN_NAME,
    adminPassword: process.env.ADMIN_PASSWORD,
}