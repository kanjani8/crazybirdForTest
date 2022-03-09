import mongoose, { Schema } from "mongoose";
import schoolData from "./datas/schoolData";


const schoolSchema = new mongoose.Schema({
  name:{type: String, required: true, trim: true}, 
  subjects: [{ type: Schema.Types.ObjectId, required: true, ref: "Subject"}], // 아직안씀
  locations: [{type: Schema.Types.ObjectId, ref: "Location" }], //아직안씀
  address: {
    lat: {type: Number, required:true},
    lng: {type: Number, required:true},
  }
});
//학교 정보 추가. 지도를 연결한다던지. 개교기념일/논술시험날 등 시간표에 표시될 공통휴일?


schoolSchema.set('collection', 'School');
const School = mongoose.model("School", schoolSchema);

School.collection.insertMany(schoolData);

//School.collection.deleteMany({});
//School.collection.deleteOne({name:"미소속"});
export default School;