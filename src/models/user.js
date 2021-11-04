import bcrypt from "bcrypt";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true, trim:true},
    email: { type: String, required: true, unique: true, trim: true},
    username: { type: String, required: true, unique: true, trim: true},
    password: { type: String, required: true},
})

userSchema.pre("save", async function(){
    this.password = await bcrypt.hash(this.password, 5);
});

const User = mongoose.model("User", userSchema);
export default User;