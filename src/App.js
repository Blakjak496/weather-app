import './App.css';
import Topbar from "./components/topbar/Topbar";
import ForecastBox from './components/forecast/ForecastBox';
import {useState} from 'react';

function App() {
  const [location, setLocation] = useState('London');

  return (
    <div className="App">
      <header className="app_header">
        <h1>Weather Forecast</h1>
      </header>
      <Topbar setLocation={setLocation}/>
    </div>
  );
}

export default App;
