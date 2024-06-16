import matchModel from "./models/match.models.js";
import resultModel from "./models/result.models.js";
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
            const match = await matchModel.findById(id).populate("league").populate("players").populate("result")
            return match
        } catch (error){
            return error
        }
    }
    async getMatchsByCreator(id){
        try {
            const match = await matchModel.find({creatorId:id}).populate("league").populate("players").populate("result")
            return match
        } catch (error){
            return error
        }
    }
    async joinPlayer(idMatch,id){
        try {
            const user = await userModel.findById(id)
            if(!user){
                return null
            }
            const matchUpdate = await matchModel.findByIdAndUpdate(idMatch,{$push:{players:id}},{new:true, useFindAndModify:false})
            return matchUpdate
        } catch (error){
            return error
        }
    }
    async removePlayer(idMatch,id){
        try {
            const user = await userModel.findById(id)
            if(!user){
                return null
            }
            const matchUpdate = await matchModel.findByIdAndUpdate(idMatch,{$pull:{players:id}},{new:true, useFindAndModify:false})
            return matchUpdate
        } catch (error){
            return error
        }
    }
    async deleteMatch(idMatch){
        try {
            const response = await matchModel.deleteOne({_id:idMatch})
            return response
        } catch (error){
            return error
        }
    }
    async updateResult(data){
        try {
            const result = await resultModel.create(data)
            const match = await matchModel.findByIdAndUpdate(data.match, {finished:true,result:result._id})

            return result
        } catch (error){
            return error
        }
    }

}

export default MatchManagerMongo = new MatchManagerMongo()