import mongoose, { Schema } from "mongoose";

const postingSchema = new mongoose.Schema({
  title:{type: String, required: true, trim: true, maxLength: 80}, 
  script: { type: String, required: true, trim: true, minLength: 3 },
  videos: [{type: String}],
  images: [{type: String}],
  // image_meta: [{
  //   image_name: {type: String},
  //   image: {type: String},
  // }],
  createdAt: { type: Date, required: true, default: Date.now },
  meta: {
    views: { type: Number, default: 0, required: true },
    rating: { type: Number, default: 0, required: true },
    reported: { type: Number, default: 0, required: true },
  },
  subject: { type: Schema.Types.ObjectId, required: true, ref: "Subject"},
  user: { type: Schema.Types.ObjectId, required: true, ref: "User"},
  comments: [{ type: Schema.Types.ObjectId, ref: "Comment"}],
});


postingSchema.set('collection', 'Posting');
const Posting = mongoose.model("Posting", postingSchema);

//Posting.collection.insertMany();
//Posting.collection.deleteMany({});
export default Posting;