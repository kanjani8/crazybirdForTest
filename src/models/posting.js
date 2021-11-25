import mongoose from "mongoose";
import Subject from "./subject";
import User from "./user";
const Schema = mongoose.Schema;

const postingSchema = new mongoose.Schema({
  title:{type: String, required: true, trim: true, maxLength: 80}, 
  script: { type: String, required: true, trim: true, minLength: 3 },
  createdAt: { type: Date, required: true, default: Date.now },
  meta: {
    views: { type: Number, default: 0, required: true },
    rating: { type: Number, default: 0, required: true },
  },
  subjectId: { type: Schema.Types.ObjectId, required: true, ref: Subject},
  userId: { type: Schema.Types.ObjectId, required: true, ref: User},
});


postingSchema.set('collection', 'Posting');
const Posting = mongoose.model("Posting", postingSchema);

//Posting.collection.insertMany();
//Posting.collection.deleteMany({});
export default Posting;