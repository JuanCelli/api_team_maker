import userModel from "./models/user.models.js";

const fieldUser = "_id first_name last_name full_name email age registeredBy role last_connection"

class UserManagerMongo{
    async createUser(data){
        try {
            const newUser = await userModel.create(data)
            return newUser
        } catch (error){
            return error
        }
    }
    async getUserById(id){
        try {
            const user = await userModel.findById(id, fieldUser)
            return user
        } catch (error){
            return error
        }
    }

    async getUserByEmail(email){
        try {
            const user = await userModel.findOne({email:email}, fieldUser)
            return user
        } catch (error){
            return error
        }
    }
}

export default UserManagerMongo = new UserManagerMongo()