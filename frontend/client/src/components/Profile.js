// src/components/Profile.js
import React from 'react';

const Profile = ({ userData }) => {
  if (!userData) return <div>Loading...</div>; // Show loading if no data is passed

  return (
    <div>
      <h3>Username: {userData.username}</h3>
      <h3>Email: {userData.email}</h3>
      {/* Add any other details you want to show */}
    </div>
  );
};

export default Profile;
