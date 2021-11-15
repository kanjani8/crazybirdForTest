import mongoose from "mongoose";
import Subject from "./subject";
import User from "./user";
var Schema = mongoose.Schema;
const testSchema = new mongoose.Schema({
  question: { type: String, required: true, trim: true},
  answer: { type: String, required: true, trim: true},
  userId: {type: Schema.Types.ObjectId, required: true, ref: User}, 
  subjectId: { type: Schema.Types.ObjectId, required: true, ref: Subject},
  subjectName:{ type: String, required: true},
  wrongAnswer1: {type:String, trim: true},
  wrongAnswer2: {type:String, trim: true},
  wrongAnswer3: {type:String, trim: true},
});
/*추가할 요소들: 공개 비공개 bool값*/
const Test = mongoose.model("Test", testSchema);
/*Test.collection.remove({}); 잘못넣어둔 쓰레기 데이터들 한번에 삭제*/
/*Test.collection.insertOne({ userId: "minji", question: "이것은 무엇인가?",
          answer : "망한서버", subject : { _id: "6125e936f3996d0200cb17c5"}});*/
export default Test;