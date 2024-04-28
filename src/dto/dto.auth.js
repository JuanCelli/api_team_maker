import createHash from "../utils/createHash.js";

export class dtoRegister{
    constructor(user) {
        this.first_name = user.first_name;
        this.last_name = user.last_name;
        this.full_name = this.first_name + " " + this.last_name;
        this.age = user.age;
        this.email = user.email;
        this.password = createHash(user.password)
    }
};