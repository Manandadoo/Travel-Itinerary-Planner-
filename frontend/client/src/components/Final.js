// final.js
import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import '../styles/final.css'; // Importing the final.css file

const Final = () => {
  const location = useLocation();
  const { chosenHotel, chosenFlight } = location.state || {};

  const calculateTotalExpense = () => {
    const hotelPrice = chosenHotel ? chosenHotel.Hotel_Price : 0;
    const flightPrice = chosenFlight ? chosenFlight.price : 0;
    return hotelPrice + flightPrice;
  };

  return (
    <div className="final-page">
      <div className="itinerary-container">
        <h1>Your Itinerary</h1>

        {/* Trip Details Section */}
        <section id="trip-details" className="section">
          <h2>Trip Details</h2>
          <div><strong>Destination:</strong> {chosenHotel ? chosenHotel.City : 'Not Available'}</div>
          <div><strong>Travel Dates:</strong> 
            {chosenFlight ? `${chosenFlight.departureDate} to ${chosenFlight.returnDate}` : 'Not Available'}
          </div>
        </section>

        {/* Hotel Details Section */}
        <section id="hotel-details" className="section">
          <h2>Hotel Details</h2>
          {chosenHotel ? (
            <div className="hotel-card">
              <div><strong>Name:</strong> {chosenHotel.Hotel_Name}</div>
              <div><strong>Price per night:</strong> Rs {chosenHotel.Hotel_Price}</div>
              <div><strong>Rating:</strong> {chosenHotel.Hotel_Rating} Stars</div>
              <div><strong>City:</strong> {chosenHotel.City}</div>
              <div><strong>Amenities:</strong></div>
              <ul>
                {Object.keys(chosenHotel).filter(key => key.startsWith('Feature_')).map((featureKey, index) => (
                  <li key={index}>{chosenHotel[featureKey]}</li>
                ))}
              </ul>
            </div>
          ) : (
            <p>No hotel selected.</p>
          )}
        </section>

        {/* Flight Details Section */}
        <section id="flight-details" className="section">
          <h2>Flight Details</h2>
          {chosenFlight ? (
            <div className="flight-card">
              <div><strong>Origin:</strong> {chosenFlight.origin}</div>
              <div><strong>Destination:</strong> {chosenFlight.destination}</div>
              <div><strong>Airline:</strong> {chosenFlight.airline}</div>
              <div><strong>Departure Date:</strong> {chosenFlight.departureDate}</div>
              <div><strong>Return Date:</strong> {chosenFlight.returnDate}</div>
              <div><strong>Price:</strong> Rs {chosenFlight.price}</div>
            </div>
          ) : (
            <p>No flight selected.</p>
          )}
        </section>

        {/* Total Expense Section */}
        <section id="total-expense" className="section">
          <h2>Total Expense</h2>
          <div><strong>Total Hotel Price:</strong> Rs {chosenHotel ? chosenHotel.Hotel_Price : 0}</div>
          <div><strong>Total Flight Price:</strong> Rs {chosenFlight ? chosenFlight.price : 0}</div>
          <div><strong>Total Expense:</strong> Rs {calculateTotalExpense()}</div>
        </section>

        {/* Link to check another itinerary */}
        <section id="check-another-itinerary" className="footer">
          <p>
            Want to check another itinerary? <Link to="/intro">Go back to Intro</Link>
          </p>
        </section>
      </div>
    </div>
  );
};

export default Final;
