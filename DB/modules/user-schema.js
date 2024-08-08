import  { SchemaTypes } from "mongoose";
import mongoose from "../connections.js";
const schema = mongoose.Schema;

const slotSchema = new Schema({
    time : {
        type: String,
    },
    isBooked : {
        type: Boolean,
        default: false
    }
})
const dateSchedule = new Schema({
    date : {
        type: String
    },
    slots : [slotSchema]
})
const userschema = new schema({
  'email': { type: SchemaTypes.String, required: true, unique: true },
  'password': { type: SchemaTypes.String, required: true, minLength : 8,maxLength : 100 },
  'name': { type: SchemaTypes.String, required: true },
  'phone': { type: SchemaTypes.String },
  'info': { type: SchemaTypes.String },
  'flag':{type:SchemaTypes.Boolean},
  'dates' : [dateSchedule]
});
export const usermodel = mongoose.model("user", userschema);
export const Slot = mongoose.model('Slot', slotSchema);
export const DateSchedule = mongoose.model('DateSchedule', dateSchedule);

