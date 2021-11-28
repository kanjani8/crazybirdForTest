import mongoose, { Schema } from "mongoose";
//import subjectData from "./datas/subjectData";


const subjectSchema = new mongoose.Schema({
  name:{type: String, required: true, trim: true}, 
  professor: {type: String, trim:true},
  school:{type: Schema.Types.ObjectId, ref:"School"},
});
//학교 정보 추가.


subjectSchema.set('collection', 'Subject');
const Subject = mongoose.model("Subject", subjectSchema);

Subject.collection.insertOne({name:"미지정과목2"});
//Subject.collection.deleteMany({}); //모든 과목들 한번에 삭제
//Subject.collection.insertMany(subjectData);
export default Subject;