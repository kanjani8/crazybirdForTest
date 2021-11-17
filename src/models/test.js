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
  opened: {type: Boolean, required: true, default: false},
  formType: {type: String, required: true, default: "1"},
  forWhen: {type: String, default:"middle"},
});

// 중간고사문제인지 기말고사 문제인지 체크할 수 있게하기

const Test = mongoose.model("Test", testSchema);
/*Test.collection.remove({}); 잘못넣어둔 쓰레기 데이터들 한번에 삭제*/
/*Test.collection.insertOne({ userId: "minji", question: "이것은 무엇인가?",
          answer : "망한서버", subject : { _id: "6125e936f3996d0200cb17c5"}});*/
export default Test;