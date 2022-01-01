import mongoose, { Schema } from "mongoose";
import quoteData from "./datas/quoteData";

const quoteSchema = new mongoose.Schema({
    author: {type: String, default: "unknown", trim: true},
    content: {type: String, required: true, trim: true },
    mode: {type: String, required: true, default: "sarcasm"},// wise랑 두가지 버전이 있음 혹은 blame까지 3개. 
});

const Quote = mongoose.model("Quote", quoteSchema);

//Quote.collection.insertMany(quoteData);
  
export default Quote;