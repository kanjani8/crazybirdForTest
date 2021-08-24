import mongoose from "mongoose";

const testSchema = new mongoose.Schema({
  subjectId: Number,
  userId: String, 
  question: String,
  answer: String,
});

const Test = mongoose.model("Test", testSchema);
export default Test;