import mongoose, { Schema } from "mongoose";
import locationData from "./datas/locationData";


const locationSchema = new mongoose.Schema({
  name:{type: String, required: true, trim: true}, 
  lat: {type: Number, required:true},
  lng: {type: Number, required:true},
  school: {type: Schema.Types.ObjectId, ref: "School"},
});
//학교 정보 추가.


locationSchema.set('collection', 'Location');
const Location= mongoose.model("Location", locationSchema);

//Location.collection.insertMany(locationData);
//Location.collection.deleteMany({});
//School.collection.deleteOne({name:"미소속"});
export default Location;