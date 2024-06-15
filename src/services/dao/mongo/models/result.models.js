import { Schema,model} from "mongoose";

const resultSchema = new Schema({
    match:{type: Schema.Types.ObjectId, ref: 'matches'},
    goals_team_1: {type:Number, required:true},
    goals_team_2: {type:Number, required:true}
})

const resultModel = model ("results",resultSchema)
export default resultModel