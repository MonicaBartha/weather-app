import { createSelector } from 'reselect';
import {SET_FORECAST_DATA, GET_WEATHER_CITY, SET_WEATHER_CITY } from './../actions';
import toPairs from 'lodash.topairs';


export const cities = (state = {}, action) => {
    switch (action.type) {
        case SET_FORECAST_DATA: {
            const { city, forecastData }  = action.payload;
            // [city] es el key
            return { ...state, [city]: { ...state[city], forecastData }};
            }
            case GET_WEATHER_CITY: {
                const city = action.payload;
                return { ...state, [city]: { ...state[city], weather: null }}
            }
            case SET_WEATHER_CITY: {
                const { city, weather } = action.payload;
                return { ...state, [city]:  {...state[city], weather} }
            }
            default:
              return state;
    }
}

export const getForecastDataFromCities = 
    createSelector((state, city) => state[city] && state.city.forecastData, forecastData => forecastData); 

// toPairs va arrojar un array con clave valor, la clave es el nombre de la ciudad
// cities es el objeto de ciudades, cada uno con info
// weather es el objeto que contiene los datos: humidity, temperature, wind, weatherState

const fromObjectToArray = cities => (toPairs(cities).map(([key, value]) => ({key, name: key, data: value.weather})));

export const getWeatherCities = 
createSelector(state => fromObjectToArray(state), cities => cities);