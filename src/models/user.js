import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userName: String,
    password: Password,
    realName: String,
    
})

const User = mongoose.model( User, userSchema);
export default User;