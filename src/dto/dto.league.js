export class dtoCreateLegue{
    constructor(data,creatorId) {
        this.name = data.name;
        this.creatorId = creatorId;
        this.description = data.description;
        this.matches = data.matches;
    }
};