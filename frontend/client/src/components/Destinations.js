// src/components/Destinations.js
import React from 'react';
import DestinationCard from './DestinationCard';
import Header from './Header'; // Import the Header component
import Footer from './Footer'; // Import the Footer component
import '../styles/Destination.css'; // Import the unique CSS file

const Destinations = () => {
  const destinations = [
    {
      id: 'a',
      imgSrc: '/images/bangalore.jpg', 
      title: 'Bangalore',
      description: 'The vibrant tech city known for its parks and nightlife.',
      destination: 'bangalore'
    },
    {
      id: 'b',
      imgSrc: '/images/delhi.jpg',
      title: 'Delhi',
      description: 'The bustling capital of India, rich in history and culture.',
      destination: 'delhi'
    },
    {
      id: 'c',
      imgSrc: '/images/chennai.jpg',
      title: 'Chennai',
      description: 'Known for its temples, beaches, and cuisine.',
      destination: 'chennai'
    },
    {
      id: 'd',
      imgSrc: '/images/kolkata.jpg',
      title: 'Kolkata',
      description: 'The cultural capital with a vibrant arts scene.',
      destination: 'kolkata'
    },
    {
      id: 'e',
      imgSrc: '/images/mumbai.jpeg',
      title: 'Mumbai',
      description: 'The city that never sleeps, known for Bollywood and its bustling streets.',
      destination: 'mumbai'
    }
  ];

  return (
    <div className="destination-page">
      <Header /> {/* Include Header at the top */}
      <section id="destinations">
        <h2>Popular Destinations</h2>
        <div className="cards">
          {destinations.map(dest => (
            <DestinationCard
              key={dest.id}
              imgSrc={dest.imgSrc}
              title={dest.title}
              description={dest.description}
              destination={dest.destination}
            />
          ))}
        </div>
      </section>
      <Footer /> {/* Include Footer at the bottom */}
    </div>
  );
};

export default Destinations;
