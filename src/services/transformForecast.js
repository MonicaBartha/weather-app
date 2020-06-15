import moment from 'moment';
import 'moment/locale/es';
import transformWeather from './transformWeather';

// datos que vienen del servidor
const transformForecast = data => (
    // list es de los datos que trae la api
    data.list.filter(item => (
        // se muestra hora 2, 8 y 14 porque la hora de Chile es -4 h UTC
        moment.unix(item.dt).utc().hour() === 6 ||
        moment.unix(item.dt).utc().hour() === 12 ||
        moment.unix(item.dt).utc().hour() === 18
    )).map(item => (
        {
            weekDay: moment.unix(item.dt).format('ddd'),
            hour: moment.unix(item.dt).hour(),
            data: transformWeather(item)
        }
    ))
);

export default transformForecast;