import React, { useState, useEffect } from 'react';

const App = () => {
  const [dogImage, setDogImage] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetching the random dog image from the API
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => response.json())
      .then((data) => {
        // Once the response is received, set the image URL and mark loading as complete
        setDogImage(data.message);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching dog image:', error);
        setIsLoading(false); // In case of an error, still mark loading as complete
      });
  }, []); // The empty dependency array ensures that this useEffect callback only runs once on component mount

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <img src={dogImage} alt="A Random Dog" />
      )}
    </div>
  );
};

export default App;