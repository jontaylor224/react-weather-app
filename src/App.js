import './App.css';
import React, {useState} from 'react';

function App() {
  const [locationSearch, setLocationSearch] = useState('')
  const [locations, setLocations] = useState([])
  const addLocation = () => {
    setLocations(locationSearch, ...locations)
    setLocationSearch('')
  }
  const disableSearch = () => locationSearch.trim() === ''

  return (
    <div>
      <h1>Weather App</h1>
      <div>
        <label>
          Add Location<input type="text" value={locationSearch} onChange={ e => setLocationSearch(e.target.value) }/>
        </label>
        <button onClick={ addLocation } disabled={disableSearch} >Search</button>
      </div>
      <div>
      <table>
      <thead>
      <tr>
        <th>Name</th>
      </tr>
      </thead>
      <tbody>
      {locations.map( (location,index) =>
        <tr key={index}><td>{location}</td></tr>
      )}
      </tbody>
    </table>
      </div>
    </div>
  );
}

export default App;
