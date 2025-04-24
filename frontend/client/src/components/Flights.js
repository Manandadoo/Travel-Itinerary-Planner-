import React, { useState } from 'react';
import axios from 'axios';
import '../styles/flights.css'; // Importing the CSS file
import { useLocation, useNavigate } from 'react-router-dom';

const Flights = () => {
  const [flights, setFlights] = useState([]);
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [airline, setAirline] = useState('');

  const location = useLocation();
  const navigate = useNavigate();

  // Fetch flights based on filters
  const fetchFlights = async () => {
    try {
      const url = `http://localhost:5000/api/flights/flights2?origin=${origin}&destination=${destination}&airline=${airline}`;
      console.log("Request URL:", url); // Debugging the URL

      const response = await axios.get(url);
      console.log("Fetched flights data:", response.data); // Log the received flight data
      setFlights(response.data);
    } catch (error) {
      console.error('Error fetching flights (frontend):', error);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchFlights();
  };

  return (
    <div className="flights-body">
      <section id="flights-page">
        <h2 className="flights-heading">Flights</h2>
        <form id="flights-search" onSubmit={handleSearch}>
          <label htmlFor="origin">Origin:</label>
          <select id="origin" name="origin" value={origin} onChange={(e) => setOrigin(e.target.value)}>
            <option value="" disabled>Select Origin</option>
            <option value="ANY">ANY</option>
            <option value="Bengaluru">Bengaluru</option>
            <option value="Delhi">Delhi</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Chennai">Chennai</option>
            <option value="Kolkata">Kolkata</option>
          </select>

          <label htmlFor="destination">Destination:</label>
          <select id="destination" name="destination" value={destination} onChange={(e) => setDestination(e.target.value)}>
            <option value="" disabled>Select Destination</option>
            <option value="ANY">ANY</option>
            <option value="Bengaluru">Bengaluru</option>
            <option value="Delhi">Delhi</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Chennai">Chennai</option>
            <option value="Kolkata">Kolkata</option>
          </select>

          <label htmlFor="departure-date">Departure Date:</label>
          <input 
            type="date" 
            id="departure-date" 
            value={departureDate || ''} 
            onChange={(e) => setDepartureDate(e.target.value)} 
          />

          <label htmlFor="return-date">Return Date:</label>
          <input 
            type="date" 
            id="return-date" 
            value={returnDate || ''} 
            onChange={(e) => setReturnDate(e.target.value)} 
          />

          <label htmlFor="airline">Airline:</label>
          <select id="airline" name="airline" value={airline} onChange={(e) => setAirline(e.target.value)}>
            <option value="" disabled>Select Airline</option>
            <option value="ANY">ANY</option>
            <option value="Air India">Air India</option>
            <option value="AirAsia India">AirAsia India</option>
            <option value="GoAir">GoAir</option>
            <option value="Jetlite">Jetlite</option>
            <option value="IndiGo">IndiGo</option>
            <option value="Jet Airways">Jet Airways</option>
            <option value="SpiceJet">SpiceJet</option>
            <option value="Vistara">Vistara</option>
          </select>

          <button type="submit" className="flights-btn">Search Flights</button>
        </form>
      </section>

      <section id="flights-list">
        <h2 className="flights-heading">Available Flights</h2>
        {flights.length > 0 ? (
          flights.map((flight) => (
            <div key={flight._id} className="flights-card">
              <p><strong>Destination:</strong> {flight.destination}</p>
              <p><strong>Source:</strong> {flight.origin}</p>
              <p><strong>Airline:</strong> {flight.airline}</p>
              <p><strong>Price:</strong> Rs {flight.price}</p>
              <form action="/final" method="get">
                <input type="hidden" name="chosenDestination" value={flight.destination} />
                <input type="hidden" name="price" value={flight.price} />
                <input type="hidden" name="departureTime" value={flight.scheduledDepartureTime} />
                <input type="hidden" name="origin" value={origin} />
                <input type="hidden" name="airline" value={airline} />
                <input type="hidden" name="departureDate" value={departureDate} />
                <input type="hidden" name="returnDate" value={returnDate} />

                <button 
                  type="button" 
                  onClick={() => navigate('/final', { 
                    state: { 
                      chosenHotel: location.state?.chosenHotel, // Pass hotel data if available
                      chosenFlight: { 
                        destination: flight.destination,
                        origin: flight.origin,
                        airline: flight.airline,
                        price: flight.price,
                        departureDate,
                        returnDate
                      }
                    } 
                  })} 
                  className="flights-btn choose-btn"
                >
                  Select
                </button>
              </form>
            </div>
          ))
        ) : (
          <p>No flights available for this route.</p>
        )}
      </section>

      <footer className="flights-footer">
        {/* Include your footer here */}
      </footer>
    </div>
  );
};

export default Flights;
