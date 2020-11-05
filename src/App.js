import React, { useState, useEffect } from 'react';
import './App.css';
import Picture from './components/Picture';
import Title from './components/Title';
import Explanation from './components/Explanation';
import Date from './components/Date';
import axios from 'axios';

function App() {
  const [nasaData, setNasaData] = useState([]);
  useEffect(() => {
    axios
      .get(
        'https://api.nasa.gov/planetary/apod?api_key=XQbwakmRliPQA1NGSdBEUlGb7qr2VJ1Qke65B40n'
      )
      .then((res) => {
        setNasaData(res.data);
      })
      .catch((err) => {
        return err;
      });
  }, []);

  return (
    <div className='App'>
      <h1>
        NASA photo of the day
        <span role='img' aria-label='go!'>
          🚀
        </span>
        !
      </h1>
      <Picture nasaData={nasaData} />
      <Title nasaData={nasaData} />
      <Date nasaData={nasaData} />
      <Explanation nasaData={nasaData} />
    </div>
  );
}

export default App;
//test
//test
