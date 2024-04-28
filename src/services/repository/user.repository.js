export default class UserRepository {
    constructor(dao) {
        this.dao = dao;
    }
    createUser = (data) => {
        return this.dao.createUser(data);
    }
}