import bcrypt from "bcrypt";
import mongoose, { Schema } from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true, trim:true},
    avatarUrl: String,
    kakaoImg: {type: Boolean, default: false },
    email: { type: String, required: true, unique: true, trim: true},
    emailCertificated: {type: Boolean, default: false},
    username: { type: String, required: true, unique: true, trim: true},
    social: String,
    password: { type: String, required: true},
    point: {type: Number, default: 0},
    reported: {type: Number, default: 0}, 
    recommendPost: [{type:Schema.Types.ObjectId, ref:"Posting"}],
    school:{type: Schema.Types.ObjectId, ref:"School"},
    schoolCertificated: {type: Boolean, default: false}, // 마저 구현해야함
    schoolNumber: {type: Number}, // 아직구현안함
    likedSubjects:[{type: Schema.Types.ObjectId, ref:"Subject"}], 
    postings:[{type: Schema.Types.ObjectId, ref:"Posting"}], 
    tests:[{type: Schema.Types.ObjectId, ref:"Test"}],
    comments: [{ type: Schema.Types.ObjectId, ref: "Comment"}],
    block: {type: Boolean, default:false},
    mode: {type: String, default: "sarcasm"}, // wise랑 두가지 버전이 있음 혹은 blame까지 3개. 
})
// 성적들도 모아야될수도있음


userSchema.pre("save", async function(){
    if(this.isModified("password"))
        this.password = await bcrypt.hash(this.password, 5);
});

const User = mongoose.model("User", userSchema);

//User.collection.deleteMany();
export default User;