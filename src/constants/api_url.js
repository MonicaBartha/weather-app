
const location = "Buenos Aires,ar";
const api_key = "120666685349375e1d0d73faa05698af";
const url_base_weather = "http://api.openweathermap.org/data/2.5/weather";

export  const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;