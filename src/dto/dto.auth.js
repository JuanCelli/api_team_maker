import createHash from "../utils/createHash.js";
import { generateRandomPassword } from "../utils/generateRandomPassword.js";

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

export class dtoRegisterGoogle{
    constructor(user) {
        this.first_name = user.given_name;
        this.last_name = user.family_name;
        this.full_name = this.first_name + " " + this.last_name;
        this.registeredBy="google";
        this.age = user.age || 18;
        this.email = user.email;
        this.password = createHash(generateRandomPassword())
    }
};