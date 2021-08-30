import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: {type: String, required: true, unique: true},
    username: {type: String, required: true, unique: true},
    pasword: {type: String, required: true},
    name: {type: String, required: true},
    //university: {type: String, required: true}, 
})

const User = mongoose.model( User, userSchema);
export default User;