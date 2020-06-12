import React, {Component} from 'react';
import './App.css';
import LocationList from './components/LocationList';

const cities = [
  'Buenos Aires,ar',
  'Santiago de Chile,cl',
  'Bogota,col',
  'Ciudad De Mexico,mx',
  'Madrid,es',
  'Lima,pe',
];

class App extends Component {
  handleSelectedLocation = city => {
    console.log(`handleSelectedLocation ${city}`);
  }
  render() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <LocationList cities={cities} onSelectedLocation={this.handleSelectedLocation}/>
    </div>
  );
 }
}

export default App;
