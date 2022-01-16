import mongoose, { Schema } from "mongoose";

const commentSchema = new mongoose.Schema({
    text: {type: String, required: true },
    createdAt: { type: Date, required: true, default: Date.now },
    posting: { type: Schema.Types.ObjectId, required: true, ref: "Posting"},
    owner: { type: Schema.Types.ObjectId, required: true, ref: "User"},
});

const Comment = mongoose.model("Comment", commentSchema);
export default Comment;