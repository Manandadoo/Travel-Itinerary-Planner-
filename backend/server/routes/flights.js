import express from 'express';
import Flight2 from '../models/flights.js';

const router = express.Router();

router.get('/flights2', async (req, res) => {
  const { origin, destination, airline } = req.query;

  console.log("origin, destination, airline = "+origin, destination, airline);

  const filter = {};
  
  if (origin) filter.origin = origin;
  if (destination) filter.destination = destination;
  if (airline) filter.airline = airline;

  try {
    const flights = await Flight2.find(filter);
    res.json(flights);
  } catch (error) {
    console.error('Error fetching flights (backend):', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

export default router;
