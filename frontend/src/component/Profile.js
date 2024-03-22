import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = () => {
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/profile/profile');
        setUserProfile(response.data);
      } catch (error) {
        setError(error.response.data.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>User Profile</h2>
      {userProfile && (
        <div>
          <p>First Name:{userProfile.firstName}</p>
          <p><strong>Last Name:</strong> {userProfile.lastName}</p>
          <p><strong>Email:</strong> {userProfile.email}</p>
          <p><strong>Contact No:</strong> {userProfile.contactNo}</p>
          <p><strong>Address:</strong> {userProfile.address}</p>
        </div>
      )}
    </div>
  );
};

export default Profile;