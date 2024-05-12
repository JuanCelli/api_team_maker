import userModel from "./models/user.models.js";

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
            const user = await userModel.findById(id)
            return user
        } catch (error){
            return error
        }
    }

    async getUserByEmail(email){
        try {
            const user = await userModel.findOne({email:email})
            return user
        } catch (error){
            return error
        }
    }
}

export default UserManagerMongo = new UserManagerMongo()