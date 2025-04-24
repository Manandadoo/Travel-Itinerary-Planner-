import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Flight2 from './server/models/flights.js';

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
.then(async () => {
  console.log('MongoDB connected');

  // Fetch the first entry in the flights collection
  const firstFlight = await Flight2.findOne(); // Find one flight
  if (firstFlight) {
    console.log('First flight entry:', firstFlight);
  } else {
    console.log('No flights found in the database.');
  }
})
  .catch(err => console.log(err));

  export default mongoose;