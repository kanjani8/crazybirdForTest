import mongoose from "mongoose";
import Subject from "./subject";
var Schema = mongoose.Schema;
const testSchema = new mongoose.Schema({
  userId: String, 
  question: String,
  answer: String,
  subject: { type: Schema.Types.ObjectId, ref: 'Subject' }
});
const Test = mongoose.model("Test", testSchema);
/*Test.collection.insertOne({ userId: "minji", question: "이것은 무엇인가?",
          answer : "망한서버", subject : { _id: "6125e936f3996d0200cb17c5"}});*/
export default Test;