import mongoose, { Schema } from "mongoose";


const reportSchema = new mongoose.Schema({
  reporter: {type:Schema.Types.ObjectId, ref: "User"},
  title: {type: String, trim: true}, 
  script: {type: String, trim: true}, 
  reportedPosting: {type:Schema.Types.ObjectId, ref: "Posting"},
  reportedUser: {type:Schema.Types.ObjectId, ref: "User"},
  reportedTest: {type:Schema.Types.ObjectId, ref: "Test"},
  createdAt: { type: Date, required: true, default: Date.now },
});

//전체오류일 경우 제목, 내용 저장
// 글 신고
// 유저 신고
// 테스트문제 신고


reportSchema.set('collection', 'Report');
const Report = mongoose.model("Report", reportSchema);

//Report.collection.deleteMany({});

export default Report;