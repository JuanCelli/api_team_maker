import { Schema,model} from "mongoose";

const userSchema = new Schema({
    first_name: {type:String, required: true},
    last_name: {type:String, required: true},
    full_name: {type:String, required: true},
    email: {type:String, required: true,unique:true},
    age: {type:Number, required: true},
    password: {type:String, required: true},
    status:{type: Boolean,default: true},
    registeredBy:{type: String,default: "local"},
    role:{type:String, default:"user"},
    last_connection: {type:Date, default: Date.now}
})

const userModel = model ("users",userSchema)
export default userModel