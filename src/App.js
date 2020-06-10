import React from 'react';
import './App.css';
import LocationList from './components/LocationList';

const cities = [
  'Buenos Aires,ar',
  'Washington,us',
  'Bogota,col',
  'Ciudad De Mexico,mx',
  'Madrid,es',
  'Lima,pe',
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <LocationList cities={cities} />
    </div>
  );
}

export default App;
