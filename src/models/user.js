import bcrypt from "bcrypt";
import mongoose, { Schema } from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true, trim:true},
    avatarUrl: String,
    email: { type: String, required: true, unique: true, trim: true},
    username: { type: String, required: true, unique: true, trim: true},
    password: { type: String, required: true},
    point: {type: Number, default: 0},
    reported: {type: Number, default: 0}, // 신고당한 횟수(50넘으면 계정없애기, 포인트랑 원리같음)
    school:{type: Schema.Types.ObjectId, ref:"School"},
    posting:{type: Schema.Types.ObjectId, ref:"Posting"},
})
// test는 추가안할 예정


userSchema.pre("save", async function(){
    this.password = await bcrypt.hash(this.password, 5);
});

const User = mongoose.model("User", userSchema);
export default User;