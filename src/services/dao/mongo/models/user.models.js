import { Schema,model} from "mongoose";


const statsLeaguePlayerSchema = new Schema({
  id_league: {type: Schema.Types.ObjectId,ref: 'leagues',required: true},
  elo: {type: Number,default:1200},
  played: {type: Number,default:0},
  wins: {type: Number,default:0},
  losses: {type: Number,default:0},
  ties: {type: Number,default:0},
  goals: {type: Number,default:0}
})


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
    last_connection: {type:Date, default: Date.now},
    stats_league:{type:[statsLeaguePlayerSchema], default:[]}
})



const userModel = model ("users",userSchema)
export default userModel