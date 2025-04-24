import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from './Header'; // Import the Header component
import Footer from './Footer'; // Import the Footer component
import '../styles/Hotels.css'; // Import the CSS file

const Hotels = () => {
  const [hotels, setHotels] = useState([]);
  const [rating, setRating] = useState('');
  const [price, setPrice] = useState('');

  const location = useLocation();
  const navigate = useNavigate();

  // Use URLSearchParams to get the query parameters
  const queryParams = new URLSearchParams(location.search);
  const chosenDestination = queryParams.get('chosenDestination'); // Get the chosen destination from query parameters

  useEffect(() => {
    const fetchHotels = async () => {
      if (chosenDestination) {
        try {
          const response = await axios.get('http://localhost:5000/api/hotels', {
            params: {
              chosenDestination,
              rating,
              price
            }
          });
          setHotels(response.data);
        } catch (error) {
          console.error('Error fetching hotels:', error);
        }
      } else {
        console.error('Chosen destination is not defined.');
      }
    };

    fetchHotels();
  }, [chosenDestination, rating, price]);

  const handleFilterSubmit = (e) => {
    e.preventDefault();
    // Trigger a fetch again when filters are applied
  };

  return (
    <div className="hotels-page">
      <Header /> {/* Include Header at the top */}

      <h2>Hotels in {chosenDestination}</h2>

      {/* Filter Section */}
      <section id="filters">
        <h3>Filters</h3>
        <form id="filters-form" onSubmit={handleFilterSubmit}>
          <label htmlFor="rating">Rating:</label>
          <select id="rating" value={rating} onChange={(e) => setRating(e.target.value)}>
            <option value="">All Ratings</option>
            <option value="1">1 Star</option>
            <option value="2">2 Stars</option>
            <option value="3">3 Stars</option>
            <option value="4">4 Stars</option>
            <option value="5">5 Stars</option>
          </select>

          <label htmlFor="price">Max Price:</label>
          <input 
            type="number" 
            id="price" 
            value={price} 
            onChange={(e) => setPrice(e.target.value)} 
            placeholder="Enter max price"
          />

          {/* <button type="submit" className="btn">Apply Filters</button> */}
        </form>
      </section>

      {/* Hotels List */}
      <section id="hotels-list">
        <h3>Available Hotels</h3>
        {hotels.length > 0 ? (
          hotels.map((hotel) => (
            <div key={hotel._id} className="hotel-card">
              <div className="hotel-info">
                <h3>{hotel.Hotel_Name}</h3>
                <p><strong>Price:</strong> Rs {hotel.Hotel_Price}</p>
                <p><strong>Rating:</strong> {hotel.Hotel_Rating} Stars</p>

                <div className="amenities-section">
                  <h4>Top Amenities:</h4>
                  <p>
                    {hotel.Feature_1}, {hotel.Feature_2}, {hotel.Feature_3}, {hotel.Feature_4}, {hotel.Feature_5},
                    {hotel.Feature_6}, {hotel.Feature_7}, {hotel.Feature_8}, {hotel.Feature_9}
                  </p>
                </div>
              </div>

              {/* Action Button to go to Flights page */}
              <div className="hotel-action">
                <button 
                  onClick={() => navigate('/flights', { 
                    state: { chosenDestination, hotelId: hotel._id, chosenHotel: hotel } 
                  })} 
                  className="btn choose-btn"
                >
                  Choose
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No hotels available for this destination.</p>
        )}
      </section>

      <Footer /> {/* Include Footer at the bottom */}
    </div>
  );
};

export default Hotels;
