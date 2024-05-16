import jwt from 'jsonwebtoken'
import config from '../../config/config.js'

const PRIVATE_KEY = config.privateKey
const expireTime = "1h"

const genereteJwtToken = (payload, TimeExpire=expireTime)=>{
    return jwt.sign(payload,PRIVATE_KEY,{expiresIn:TimeExpire})
}

export default genereteJwtToken