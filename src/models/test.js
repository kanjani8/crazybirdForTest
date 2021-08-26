import mongoose from "mongoose";
import Subject from "./subject";
var Schema = mongoose.Schema;
const testSchema = new mongoose.Schema({
  userId: String, 
  question: String,
  answer: String,
  subject : { type: Schema.Types.ObjectId, ref: 'Subject' }
});
const Test = mongoose.model("Test", testSchema);
/*Test.collection.insertOne({subjectId : "61272eb1d45118054793104b", userId: "h3088", question: "hello", answer : "hungry"});*/
export default Test;