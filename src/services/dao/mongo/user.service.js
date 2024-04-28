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
}

export default UserManagerMongo = new UserManagerMongo()