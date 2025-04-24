import express from 'express';
import Hotel from '../models/hotels.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const { chosenDestination, rating, price } = req.query; // Get query parameters from the request

  try {
    // Build the filter object dynamically based on query parameters
    let filter = {};

    // Filter by city
    if (chosenDestination) {
      filter.City = chosenDestination;  // Assuming the field for city is 'Hotel_City' in your model
    }

    // Filter by rating (if provided)
    if (rating) {
      filter.Hotel_Rating = { $gte: rating };  // Only hotels with rating greater than or equal to the provided rating
    }

    // Filter by price (if provided)
    if (price) {
      filter.Hotel_Price = { $lte: price };  // Only hotels with price less than or equal to the provided price
    }

    // Fetch hotels from the database based on the filters
    const hotels = await Hotel.find(filter);
    
    // Send filtered hotels as response
    res.json(hotels);
  } catch (error) {
    console.error('Error fetching hotels:', error);
    res.status(500).send('Server Error');
  }
});

export default router;
