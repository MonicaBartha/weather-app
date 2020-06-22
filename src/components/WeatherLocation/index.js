import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';

const WeatherLocation = ({ onWeatherLocationClick, city, data }) => (
                <div className="weatherLocationCont" onClick={onWeatherLocationClick}>
                    <Location city={city}></Location>
                    {/* OPERADOR TERNARIO condicional: si data es true se muestra WeatherData, si no se muestra "Cargando.." */}
                    {data ?
                        <WeatherData data={data}></WeatherData> :
                        <CircularProgress size={50} thickness={7} /> }
                </div>
);
WeatherLocation.propTypes = {
    city: PropTypes.string,
    onWeatherLocationClick: PropTypes.func,
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
    }),
}
export default WeatherLocation;