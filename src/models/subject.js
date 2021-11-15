import mongoose from "mongoose";
//import subjectData from "./subjectData";


const subjectSchema = new mongoose.Schema({
  name:{type: String, required: true, trim: true}, 
  professor: {type: String, trim:true},
  scoolCode:{type: Number}
});
//학교 정보 추가.


subjectSchema.set('collection', 'Subject');
const Subject = mongoose.model("Subject", subjectSchema);

/*Subject.collection.insertMany(subjectData);*/

export default Subject;