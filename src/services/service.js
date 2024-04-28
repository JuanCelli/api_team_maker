import UserManagerMongo from "./dao/mongo/user.service.js"
import UserRepository from "./repository/user.repository.js"


const userDao = UserManagerMongo

export const userService = new UserRepository(userDao)