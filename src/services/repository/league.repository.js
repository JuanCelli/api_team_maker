export default class MatchRepository {
    constructor(dao) {
        this.dao = dao;
    }
    createLeague = (data) => {
        return this.dao.createLeague(data);
    }
    getLeagueById = (id) => {
        return this.dao.getLeagueById(id);
    }
    addMatch = (idMatch,idLeague) => {
        return this.dao.addMatch(idMatch,idLeague);
    }
}