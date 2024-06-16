export class dtoCreateMatch{
    constructor(data,creatorId) {
        this.description = data.description;
        this.fN = data.fN;
        this.typeField = data.typeField;
        this.time = data.time;
        this.ageRange = data.ageRange;
        this.typeGender = data.typeGender;
        this.location = data.location;
        this.league = data.league;
        this.creatorId = creatorId;
        this.players = [creatorId];
    }
};