import bcrypt from "bcrypt";
import mongoose, { Schema } from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true, trim:true},
    avatarUrl: String,
    email: { type: String, required: true, unique: true, trim: true},
    username: { type: String, required: true, unique: true, trim: true},
    password: { type: String, required: true},
    point: {type: Number, default: 0},
    reported: {type: Number, default: 0}, // 신고당한 횟수 나중에 (50넘으면 계정없애기, 포인트랑 원리같음)
    school:{type: Schema.Types.ObjectId, ref:"School"},
    likedSubjects:[{type: Schema.Types.ObjectId, ref:"Subject"}], 
    postings:[{type: Schema.Types.ObjectId, ref:"Posting"}], // profile에서 띄우기
    tests:[{type: Schema.Types.ObjectId, ref:"Test"}], // 나중에 내것만 풀기 선택할경우 필요
})
// 성적들도 모아야될수도있음


userSchema.pre("save", async function(){
    if(this.isModified("password"))
        this.password = await bcrypt.hash(this.password, 5);
});

const User = mongoose.model("User", userSchema);
export default User;