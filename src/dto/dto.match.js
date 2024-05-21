export class dtoCreateMatch{
    constructor(data,creatorId) {
        this.description = data.description;
        this.fN = data.fN;
        this.typeField = data.typeField;
        this.timeRange = data.timeRange;
        this.ageRange = data.ageRange;
        this.typeGender = data.typeGender;
        this.location = data.location;
        this.creatorId = creatorId;
        this.players = [creatorId];
    }
};