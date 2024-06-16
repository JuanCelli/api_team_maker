import { Schema,model} from "mongoose";

const goalSchema = new Schema({
    player:{type:Schema.Types.ObjectId, ref: 'users'},
    quantity: {type:Number, required:true},
})

const resultSchema = new Schema({
    match:{type: Schema.Types.ObjectId, ref: 'matches'},
    goals_home: {type:Number, required:true},
    goals_visit: {type:Number, required:true},
    goals:[goalSchema]
})

const resultModel = model ("results",resultSchema)
export default resultModel