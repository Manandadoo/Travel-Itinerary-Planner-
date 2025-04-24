import mongoose from 'mongoose';

// Define the schema
const flightSchema = new mongoose.Schema({
    flightNumber: Number,
    airline: String,
    origin: String,
    destination: String,
    dayOfWeek: String,
    scheduledDepartureTime: { type: Date }, //stores bith date and time
    validFrom: { type: Date },
    validTo: { type: Date },
    price: Number,
});

// Connect the model to the 'flights2' collection
const Flight2 = mongoose.model('Flight2', flightSchema, 'flights2');   //By default, Mongoose will pluralize the model name (e.g., Flight2 becomes flight2s). However, if you want to explicitly connect to a collection named flights2, you can pass that collection name as the third argument when defining the model.

export default Flight2;
