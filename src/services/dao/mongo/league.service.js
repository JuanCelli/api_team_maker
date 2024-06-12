import leagueModel from "./models/league.models.js";
import matchModel from "./models/match.models.js";


class LeagueManagerMongo{
    async createLeague(data){
        try {
            const newLeague = await leagueModel.create(data)
            return newLeague
        } catch (error){
            return error
        }
    }
    async getLeagueById(id){
        try {
            const league = await leagueModel.findById(id)
            return league
        } catch (error){
            return error
        }
    }
    async getMatchsByCreator(id){
        try {
            const match = await matchModel.find({creatorId:id})
            return match
        } catch (error){
            return error
        }
    }
    async addMatch(idMatch, idLeague){
        try {
            const match = await matchModel.findById(idMatch)
            if(!match){
                return null
            }
            const league = await leagueModel.findById(idLeague)
            if(!league){
                return null
            }
            const leagueUpdate = await leagueModel.findByIdAndUpdate(idLeague,{$push:{matches:id}},{new:true, useFindAndModify:false})
            return leagueUpdate
        } catch (error){
            return error
        }
    }
}

export default LeagueManagerMongo = new LeagueManagerMongo()