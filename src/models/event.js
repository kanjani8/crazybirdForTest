import mongoose, { Schema } from "mongoose";


const eventSchema = new mongoose.Schema({
  title: {type: String, required: true, trim: true}, 
  start: {type: Date, required:true},
  finish: {type: Date},
  allDay: {type: Boolean},
  user: {type: Schema.Types.ObjectId, ref: "User"}
});


eventSchema.set('collection', 'Event');
const Event = mongoose.model("Event", eventSchema);

// const events = [
//     {
//       title: '해냈다',
//       start: '2021-12-15',
//     },
//     {
//       title: '시험기간',
//       start: '2021-12-17',
//       end: '2021-12-24'
//     },
//   ] ;

//Event.collection.insertMany(events);
//Event.collection.deleteMany({});
export default Event;