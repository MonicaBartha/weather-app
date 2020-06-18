import React, {Component} from 'react';
import {Grid, Col, Row} from 'react-flexbox-grid';
import Paper from '@material-ui/core/Paper';
import {createStore} from 'redux';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import './App.css';
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';

const cities = [
  'Buenos Aires,ar',
  'Santiago de Chile,cl',
  'Bogota,col',
  'Ciudad De Mexico,mx',
  'Madrid,es',
  'Lima,pe',
];
const store = createStore( () => {}, 
window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__());
const setCity = (value) =>  ({type: `setCity`, value});

class App extends Component {
  constructor() {
    super();
    this.state = { city: null}
  }
  handleSelectedLocation = city => {
    this.setState({ city });
    console.log(`handleSelectedLocation ${city}`);
    // Redux
   
    store.dispatch(setCity(city));
  }
  render() {
    const { city } =  this.state;
  return (
    <Grid>
      <Row>
        <AppBar position="sticky">
          <Toolbar>
            <Typography variant="title" color="inherit"><h1>Weather App</h1></Typography>
          </Toolbar>
        </AppBar>
      </Row>
      <Row>
        <Col xs={12} md={6}>
          <LocationList cities={cities} onSelectedLocation={this.handleSelectedLocation}/>
        </Col>
        <Col xs={12} md={6}>
          <Paper elevation={4}>
            <div className="details">
              { city  && 
              <ForecastExtended city={city} />
              }
            </div>
          </Paper>
          
        </Col>
      </Row>
      
    </Grid>
  );
 }
}

export default App;
