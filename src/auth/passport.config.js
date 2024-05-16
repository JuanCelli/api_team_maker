import passport from 'passport'

import local from "passport-local"
import GoogleStrategy from 'passport-google-oauth2'
import jwtStrategy from 'passport-jwt'
import { dtoRegister, dtoRegisterGoogle } from '../dto/dto.auth.js'
import { userService } from '../services/service.js'
import config from '../config/config.js'
import isValidPassword from './utils/isValidPassword.js'
import cookieExtractor from './utils/cookieExtractor.js'

const JwtStrategy = jwtStrategy.Strategy;
const ExtractJWT = jwtStrategy.ExtractJwt;

const clientIdGoogle = config.clientIdGoogle
const clientSecretGoogle = config.clientSecretGoogle
const PORT = config.port
const PRIVATE_KEY = config.privateKey


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

    passport.use("login", new LocalStrategy(
        {passReqToCallback:true, usernameField:"email"}, async (req,username,password,done) =>{
            try {
                const {email,password} = req.body

                const user = await userService.getUserByEmail(email)
                if(!user){
                    return done(null, false)
                }
                const hash = user.password
                if(!isValidPassword(password,hash)){
                    return done(null, false)
                }
                return done(null, user)
            } catch (error) {
                return done(error)
            }
        }
    ))

    passport.use('current', new JwtStrategy(
        {
            jwtFromRequest: ExtractJWT.fromExtractors([cookieExtractor]),
            secretOrKey: PRIVATE_KEY
        }, async (jwt_payload, done) => {
            try {
                return done(null, jwt_payload)
            } catch (error) {
                return done(error)
            }
        }
    ));

    passport.use("google", new GoogleStrategy(
        {clientID: clientIdGoogle,
        clientSecret: clientSecretGoogle,
        callbackURL:`http://localhost:${PORT}/auth/google/callback`,
        passReqToCallback: true
        }, async (request,accessToken, refreshToken, profile, done) =>{
            try {
                const profileData = profile._json
                const userPreExist = await userService.getUserByEmail(profileData.email) 
                if(userPreExist){
                    return done(null, userPreExist)
                }

                const dataNewUser = new dtoRegisterGoogle(profileData)
                const newUser = await userService.createUser(dataNewUser)
                
                if(!newUser._id){
                    return done(null, false)
                }
                return done(null, newUser)
            }catch (error) {
                return done(error)
            }
        }
    ))

    passport.serializeUser((user, done) => {
        done(null, user);
      });

    passport.deserializeUser(async (user, done) => {
    try {
        done(null, user);
    } catch (error) {
        console.error("Error deserializing user " + error);
    }
    });
}

export default initializePassport


