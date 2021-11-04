import mongoose from "mongoose";
import Subject from "./subject";
var Schema = mongoose.Schema;
const testSchema = new mongoose.Schema({
  userId: String, 
  question: { type: String, required: true, trim: true},
  answer: { type: String, required: true, trim: true},
  subject: { type: Schema.Types.ObjectId, ref: 'Subject' }
});
const Test = mongoose.model("Test", testSchema);
/*Test.collection.remove({}); 잘못넣어둔 쓰레기 데이터들 한번에 삭제*/
/*Test.collection.insertOne({ userId: "minji", question: "이것은 무엇인가?",
          answer : "망한서버", subject : { _id: "6125e936f3996d0200cb17c5"}});*/
export default Test;