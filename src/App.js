import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Grid, Col, Row} from 'react-flexbox-grid';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import './App.css';
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';
import {setCity} from './actions';


const cities = [
  'Buenos Aires,ar',
  'Santiago de Chile,cl',
  'Bogota,col',
  'Ciudad De Mexico,mx',
  'Madrid,es',
  'Lima,pe',
];


class App extends Component {
  constructor() {
    super();
    this.state = { city: null}
  }
  handleSelectedLocation = city => {
    this.setState({ city });
    console.log(`handleSelectedLocation ${city}`);
    // Redux
    this.props.SetCity(city);
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
App.propTypes = {
  setCity: PropTypes.func.isRequired,
}
const mapDispatchToProps = dispatch => ({
  SetCity: value => dispatch(setCity(value))
});

export default connect(null, mapDispatchToProps)(App);

