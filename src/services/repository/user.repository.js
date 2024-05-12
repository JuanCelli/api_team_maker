export default class UserRepository {
    constructor(dao) {
        this.dao = dao;
    }
    createUser = (data) => {
        return this.dao.createUser(data);
    }
    getUserById = (id) => {
        return this.dao.getUserById(id);
    }
    getUserByEmail = (email) => {
        return this.dao.getUserByEmail(email);
    }
}