import React, { useState, useEffect } from 'react';
import './App.css';
import Picture from './Picture';
import axios from 'axios';

function App() {
  const [nasaData, setNasaData] = useState([]);
  useEffect(() => {
    const dataFetcher = () => {
      axios
        .get(
          'https://api.nasa.gov/planetary/apod?api_key=XQbwakmRliPQA1NGSdBEUlGb7qr2VJ1Qke65B40n'
        )
        .then((res) => {
          setNasaData(res.data);
        })
        .catch((err) => {
          return err;
        }, []);
    };
    dataFetcher();
  });

  return (
    <div className='App'>
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun
        <span role='img' aria-label='go!'>
          🚀
        </span>
      </p>
      <Picture nasaData={nasaData} />
    </div>
  );
}

export default App;

//test
