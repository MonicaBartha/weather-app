import React, {Component} from 'react';
import {Grid, Col, Row} from 'react-flexbox-grid';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import LocationListContainer from './containers/LocationListContainer';
import ForecastExtendedContainer from './containers/ForecastExtendedContainer';
import './App.css';

const cities = [
  'Buenos Aires,ar',
  'Santiago de Chile,cl',
  'Bogota,col',
  'Ciudad De Mexico,mx',
  'Madrid,es',
  'Lima,pe',
];


class App extends Component {
  render() {
  return (
    <Grid>
      <Row>
        <AppBar title="Weather App" />
      </Row>
      <Row>
        <Col xs={12} md={6}>
        <LocationListContainer cities={cities} />
        </Col>
        <Col xs={12} md={6}>
          <Paper elevation={4}>
            <div className="details">
              <ForecastExtendedContainer />
            </div>
          </Paper>
        </Col>
      </Row>
    </Grid>
  );
 }
}


export default App;

