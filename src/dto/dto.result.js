export class dtoCreateResult{
    constructor(data,idMatch) {
        this.match = idMatch;
        this.goals_home = data.goals_home;
        this.goals_visit = data.goals_visit;
        this.goals = data.goals;
    }
};