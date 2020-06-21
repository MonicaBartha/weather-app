import React from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import './styles.css';


const renderForecastItemDays = (forecastData) => {
    return forecastData.map( forecast => (
        // para array de componentes hay que establecer una key
    <ForecastItem 
    key={`${forecast.weekDay}${forecast.hour}`}
    weekDay={forecast.weekDay} 
    hour={forecast.hour} 
    data={forecast.data} 
    />));
  }
const renderProgress = () => {
      return <h3>Cargando pronostico extendido...</h3>;
  }

const ForecastExtended = ({city, forecastData}) => (
        <div>
            <h3 className="forecast-title">Pronóstico Extendido para {city} </h3>
            {forecastData ?
            renderForecastItemDays(forecastData) :
            renderProgress()
            }
        </div>
    )

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
    forecastData: PropTypes.array,
}
export default ForecastExtended;