import bcrypt from "bcrypt";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true, trim:true},
    avatarUrl: String,
    email: { type: String, required: true, unique: true, trim: true},
    username: { type: String, required: true, unique: true, trim: true},
    password: { type: String, required: true},
    schoolName: {type: String, default:"미지정" },
    point: {type: Number, default: 0},
})
//학교와 포인트 추가하기


userSchema.pre("save", async function(){
    this.password = await bcrypt.hash(this.password, 5);
});

const User = mongoose.model("User", userSchema);
export default User;