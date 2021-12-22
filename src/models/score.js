import mongoose, { Schema } from "mongoose";

const scoreSchema = new mongoose.Schema({
  score: {type: Number, required: true},
  createdAt: { type: Date, required: true, default: Date.now },
  subject: { type: Schema.Types.ObjectId, required: true, ref: "Subject"},
  tests: [{ type: Schema.Types.ObjectId, required: true, ref: "Test"}],
  user: {type: Schema.Types.ObjectId, required: true, ref: "User"}, 
});


const Score = mongoose.model("Score", scoreSchema);
/*Test.collection.remove({}); 잘못넣어둔 쓰레기 데이터들 한번에 삭제*/
/*Test.collection.insertOne({ userId: "minji", question: "이것은 무엇인가?",
          answer : "망한서버", subject : { _id: "6125e936f3996d0200cb17c5"}});*/
//Test.collection.deleteMany({});
export default Score;