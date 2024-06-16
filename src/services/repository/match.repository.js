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
    getMatchsByCreator = (id) => {
        return this.dao.getMatchsByCreator(id);
    }
    joinPlayer = (idMatch,id) => {
        return this.dao.joinPlayer(idMatch,id);
    }
    removePlayer = (idMatch,id) => {
        return this.dao.removePlayer(idMatch,id);
    }
    deleteMatch = (idMatch) => {
        return this.dao.deleteMatch(idMatch,id);
    }
    updateResult = (data) => {
        return this.dao.updateResult(data);
    }
}