import passport from 'passport'

import local from "passport-local"
import { dtoRegister } from '../dto/dto.auth.js'
import { userService } from '../services/service.js'



const LocalStrategy = local.Strategy

const initializePassport = () =>{
    passport.use("register", new LocalStrategy(
        {passReqToCallback:true, usernameField:"email"}, async (req,username,password,done) =>{
            try {
                const data = new dtoRegister(req.body)
                
                const userPreExist = await userService.getUserByEmail(data.email)

                if(userPreExist){
                    return done(null, false)
                }

                const newUser = await userService.createUser(data)
        
                if(!newUser._id){
                    return done(null, false)
                }
                return done(null, newUser)
            } catch (error) {
                return done(error)
            }
        }
    ))

    passport.serializeUser((user, done) => {
        done(null, user._id);
      });

    passport.deserializeUser(async (id, done) => {
    try {
        let user = await userService.getUserById(id)
        done(null, user);
    } catch (error) {
        console.error("Error deserializing user " + error);
    }
    });
}

export default initializePassport


