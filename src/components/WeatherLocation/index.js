import React, {Component} from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import {
    CLOUDY,
   } from './../../constants/weathers';

const data = {
    temperature: 5,
    weatherState: CLOUDY,
    humidity: 10,
    wind: '10m/s',
}

class WeatherLocation extends Component {
    constructor() {
        super();
        this.state = {
            city: 'Buenos Aires',
            data: data,
        }
    }
    handleUpdateClick = () => {
        console.log("actualizando");
    }
    render() {
        const { city, data } = this.state;
        return (
            <div className="weatherLocationCont">
                <Location city={city}></Location>
                <WeatherData data={data}></WeatherData>
                <button onClick={this.handleUpdateClick}>Actualizar</button>
            </div>
    )}
}

export default WeatherLocation;