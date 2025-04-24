import React from 'react';
import { Link } from 'react-router-dom';

const DestinationCard = ({ imgSrc, title, description, destination }) => {

  console.log('Destination:', destination);
  
  return (
    <div className="card">
      <img src={imgSrc} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>     

      
      {/* Pass the destination via the state in Link */}
      <Link 
        to={`/hotels?chosenDestination=${encodeURIComponent(destination)}`} // Pass the chosen destination in query
        className="btn choose-btn"
      >
        Explore
      </Link>

    </div>
  );
};

export default DestinationCard;
