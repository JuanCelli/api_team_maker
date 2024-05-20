import UserManagerMongo from "./dao/mongo/user.service.js"
import MatchManagerMongo from "./dao/mongo/match.service.js"
import UserRepository from "./repository/user.repository.js"
import MatchRepository from "./repository/match.repository.js"



const userDao = UserManagerMongo
const matchDao = MatchManagerMongo

export const userService = new UserRepository(userDao)
export const matchService = new MatchRepository(matchDao)