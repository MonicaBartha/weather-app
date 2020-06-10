import React, {Component} from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import transformWeather from './../../services/transformWeather';
import {api_weather} from './../../constants/api_url';
import './styles.css';

class WeatherLocation extends Component {
    constructor() {
        super();
        this.state = {
            city: 'Buenos Aires',
            data: null,
        }
        console.log("constructor");
    }
componentDidMount() {
    console.log("componentDidMount");
    this.handleUpdateClick();
    
}
componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
}

    handleUpdateClick = () => {
        fetch(api_weather).then(resolve => {
           
            return resolve.json();
        }).then(data => {
            const newWeather = transformWeather(data);
            console.log(newWeather);
            debugger;
            this.setState({
                data: newWeather
            })
        });
    }
    render() {
        console.log("render");
        const { city, data } = this.state;
        return (
            <div className="weatherLocationCont">
                <Location city={city}></Location>
                {/* OPERADOR TERNARIO condicional: si data es true se muestra WeatherData, si no se muestra "Cargando.." */}
                {data ?
                    <WeatherData data={data}></WeatherData> :
                    "Cargando..."
                }
            </div>
    )}
}

export default WeatherLocation;