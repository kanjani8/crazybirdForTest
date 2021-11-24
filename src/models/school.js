import mongoose from "mongoose";
import schoolData from "./schoolData";


const schoolSchema = new mongoose.Schema({
  name:{type: String, required: true, trim: true}, 
});
//학교 정보 추가.


schoolSchema.set('collection', 'School');
const School = mongoose.model("School", schoolSchema);

//School.collection.insertMany(schoolData);
//School.collection.deleteMany({});
export default School;