import UserManagerMongo from "./dao/mongo/user.service.js"
import MatchManagerMongo from "./dao/mongo/match.service.js"
import LeagueManagerMongo from "./dao/mongo/league.service.js"
import UserRepository from "./repository/user.repository.js"
import MatchRepository from "./repository/match.repository.js"
import LeagueRepository from "./repository/league.repository.js"



const userDao = UserManagerMongo
const matchDao = MatchManagerMongo
const leagueDao = LeagueManagerMongo

export const userService = new UserRepository(userDao)
export const matchService = new MatchRepository(matchDao)
export const leagueService = new LeagueRepository(leagueDao)