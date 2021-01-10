import React, {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios'

function App() {

  const [photo, setPhoto] = useState()
  const [description, setDescription] = useState()
  const [date, setDate] = useState()

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=iUmFLrxaXx53MJzta1e6vdOLrRj94MZaA6ARtn53')
    .then((res) => {
      setPhoto(res.data.url)
    })
    .catch((err) => {
      console.log('Error', err)
    })
  },[])

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=iUmFLrxaXx53MJzta1e6vdOLrRj94MZaA6ARtn53')
    .then((res) => {
     setDescription(res.data.explanation)
    })
    .catch((err) => {
      console.log('ERROR', err)
    })
  },[])

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=iUmFLrxaXx53MJzta1e6vdOLrRj94MZaA6ARtn53')
    .then((res) => {
     setDate(res.data.date)
    })
    .catch((err) => {
      console.log('ERROR', err)
    })
  },[])

  return (
    <div className='App'>
      <h1>
        NASA Photo Of The Day!
        <span role='img' aria-label='go!'>
          🚀
        </span>
      </h1>
      <img src = {photo} alt = ''/>
      <h3>{description}</h3>
      <p>{date}</p>
    </div>
  );
}

export default App;

