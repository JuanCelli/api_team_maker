export default class MatchRepository {
    constructor(dao) {
        this.dao = dao;
    }
    createMatch = (data) => {
        return this.dao.createMatch(data);
    }
    getMatchById = (id) => {
        return this.dao.getMatchById(id);
    }
}