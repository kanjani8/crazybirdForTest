import mongoose from "mongoose";
import subjectData from "./subjectData";


const subjectSchema = new mongoose.Schema({
  name:{type: String, required: true, trim: true}, 
  professor: {type: String, trim:true},
  schoolName:{type: String, default: "성신여자대학교", trim:true}
});
//학교 정보 추가.


subjectSchema.set('collection', 'Subject');
const Subject = mongoose.model("Subject", subjectSchema);

//Subject.collection.deleteMany({}); //모든 과목들 한번에 삭제
//Subject.collection.insertMany(subjectData);
export default Subject;