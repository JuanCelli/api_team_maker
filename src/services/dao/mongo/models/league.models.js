import { Schema,model} from "mongoose";

const leagueSchema = new Schema({
    name: {type:String, required: true},
    creatorId:{type: Schema.Types.ObjectId, required:true, ref: 'users'},
    description: String,
    matches:[{type: Schema.Types.ObjectId, ref: 'matches', default:[]}]
})

const leagueModel = model ("leagues",leagueSchema)
export default leagueModel