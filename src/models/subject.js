import mongoose from "mongoose";

const subjectSchema = new mongoose.Schema({
  name:{type: String, required: true, trim: true}, 
  professor: String,
});

subjectSchema.set('collection', 'Subject');
const Subject = mongoose.model("Subject", subjectSchema);
export default Subject;