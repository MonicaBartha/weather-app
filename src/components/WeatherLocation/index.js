import React, {Component} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import  {PropTypes} from 'prop-types';
import Location from './Location';
import WeatherData from './WeatherData';
import transformWeather from './../../services/transformWeather';
import './styles.css';

const api_key = "120666685349375e1d0d73faa05698af";
const url_base_weather = "http://api.openweathermap.org/data/2.5/weather";

class WeatherLocation extends Component {
    constructor({ city }) {
        super();
        this.state = {
            city,
            data: null,
        };
    }


    componentWillMount() {
        const { city } = this.state;
        const api_weather = `${url_base_weather}?q=${city}&appid=${api_key}`;
        fetch(api_weather).then(data => {
           
            return data.json();
        }).then(weather_data => {
            const data = transformWeather(weather_data);
            this.setState({ data })
        });
    }
    render() {
        const { onWeatherLocationClick } = this.props;
        const { city, data } = this.state;
        return (
            <div className="weatherLocationCont" onClick={onWeatherLocationClick}>
                <Location city={city}></Location>
                {/* OPERADOR TERNARIO condicional: si data es true se muestra WeatherData, si no se muestra "Cargando.." */}
                {data ?
                    <WeatherData data={data}></WeatherData> :
                    <CircularProgress size={50} />
                }
            </div>
    )}
}
WeatherLocation.propTypes = {
    city: PropTypes.string,
    onWeatherLocationClick: PropTypes.func,
}
export default WeatherLocation;