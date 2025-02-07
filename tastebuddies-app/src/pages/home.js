import React, { useEffect, useState } from 'react';
import api from '../services/api';

const Home = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    api.get('/')
      .then(response => setMessage(response.data.message))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      <p>{message}</p>
    </div>
  );
};

export default Home;
