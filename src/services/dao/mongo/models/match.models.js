import { Schema,model} from "mongoose";

const matchSchema = new Schema({
    description: {type:String, required: true},
    fN: {type:Number, enum:[5,7,8,9,11], required: true},
    typeField: {type:String, enum:["sintetico","piso","natural"], required: true},
    timeRange: {type:String, required: true},
    ageRange: {type:String, enum:["sub20","sub35","sub65"], required: true},
    typeGender: {type:String, enum:["masculino","femenino","mixto"], required: true},
    location:{type:String,required:true},
    status:{type: Boolean,default: true},
    creationDate: {type:Date, default: Date.now},
    creatorId:{type: Schema.Types.ObjectId, required:true, ref: 'users'},
    players:[{type: Schema.Types.ObjectId, ref: 'users', default:[]}]
})

const matchModel = model ("match",matchSchema)
export default matchModel