import matchModel from "./models/match.models.js";
import userModel from "./models/user.models.js";



class MatchManagerMongo{
    async createMatch(data){
        try {
            const newMatch = await matchModel.create(data)
            return newMatch
        } catch (error){
            return error
        }
    }
    async getMatchById(id){
        try {
            const match = await matchModel.findById(id)
            return match
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
    async joinPlayer(idMatch,id){
        try {
            const user = await userModel.findById(id)
            if(!user){
                new null
            }
            const matchUpdate = await matchModel.findOneAndUpdate(idMatch,{$push:{players:id}},{new:true, useFindAndModify:false})
            return matchUpdate
        } catch (error){
            return error
        }
    }
    async removePlayer(idMatch,id){
        try {
            const user = await userModel.findById(id)
            if(!user){
                new null
            }
            const matchUpdate = await matchModel.findOneAndUpdate(idMatch,{$pull:{players:id}},{new:true, useFindAndModify:false})
            return matchUpdate
        } catch (error){
            return error
        }
    }
}

export default MatchManagerMongo = new MatchManagerMongo()