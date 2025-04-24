import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import session from 'express-session';
import userRoutes from './server/routes/users.js';
import flight2Routes from './server/routes/flights.js';
import hotelRoutes from './server/routes/hotels.js';
//import adminRoutes from './server/routes/adminroutes.js';
import './config.js'; // Import MongoDB connection

const app = express();
const port = 5000;

dotenv.config();

app.use(cors({
  origin: 'http://localhost:3000', // Adjust this to your frontend's URL
  credentials: true,
}));

app.use(bodyParser.json());
app.use(session({
  secret: 'Manan Dadoo', 
  resave: false,
  saveUninitialized: true
}));
app.use('/api/users', userRoutes);
app.use('/api/flights', flight2Routes);
app.use('/api/hotels', hotelRoutes);
//app.use('/api/admin', adminRoutes); // Prefix admin routes with '/api/admin'


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
