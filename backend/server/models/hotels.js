import mongoose from 'mongoose';

const hotelSchema = new mongoose.Schema({
  Hotel_Name: String,
  Hotel_Price: Number,
  Hotel_Rating: Number,
  City: String,
  Features: [String]
});

const Hotel = mongoose.model('Hotel', hotelSchema);
export default Hotel;
