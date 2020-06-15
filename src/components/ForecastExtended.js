import React, {Component} from 'react';
import PropTypes from 'prop-types';
import transformForecast from './../services/transformForecast';
// import ForecastItem from './ForecastItem';
import './styles.css';

/*
const days = [
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
];
const data = {
    temperature: 10,
    humidity: 10,
    weatherState: 'normal',
    wind: 'normal',
}
*/
const api_key = "120666685349375e1d0d73faa05698af";
const url = "http://api.openweathermap.org/data/2.5/forecast";
class ForecastExtended extends Component {
    constructor() {
        super();
        this.state = { forecastData: null }
    }
    componentDidMount() {
        const url_forecast = `${url}?q=${this.props.city}&appid=${api_key}`;
        fetch(url_forecast).then(
            data => (data.json())
        ).then(
            weather_data => {
                console.log(weather_data);
                const forecastData = transformForecast(weather_data);
                console.log(forecastData);
                this.setState({ forecastData })
            }
        );

    }
    renderForecastItemDays() {
        return "Render Items";
      //  return days.map(day => (<ForecastItem weekDay={day} hour={10} data={data} />));
    }
    renderProgress = () => {
        return <h3>Cargando pronostico extendido...</h3>;
    }
    render() {
        const {city} = this.props;
        const { forecastData } = this.state;
        return (
        <div >
            <h3 className="forecast-title">Pronóstico Extendido para {city} </h3>
            {forecastData ?
            this.renderForecastItemDays() :
            this.renderProgress()
            }
        </div>
        );
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
}
export default ForecastExtended;