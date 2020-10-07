import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios'
import Picture from './Components/Picture'

function App() {
  const [nasaData, setNasaData] = useState([])
  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=4pgKxa1K0bOGnDDaciXJn7dZ5dvKjrjuHdjh0xWV')
    .then( res => {
      console.log(res.data)
      setNasaData(res.data)
    })
    .catch(err => {
      console.log(err)
    })
    
    }, [])
    // console.log('nasaData', nasaData)
    

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!

    <Picture nasaData = {nasaData}/>
   

      </p>
    </div>
  );
}

export default App;

