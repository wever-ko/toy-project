import React, { Component } from 'react';
import getPosition from './getPosition';
import getLocation from './getLocation';
import getWeatherForCoords from './getWeather';

class Weather extends Component {
  state = {
    city: '',
    weatherInformation: null,
  };

  componentDidMount() {
    try {
      this.getWeatherForCurrentLocation();
    } catch (e) {
      console.err(e);
    }
  }

  getWeatherForCurrentLocation = async () => {
    const position = await getPosition();
    const city = await getLocation(position.coords);
    const { data: weatherData } = await getWeatherForCoords(position.coords);
    const weatherInformation = {
      main: weatherData.main,
      weather: weatherData.weather[0],
    };
    this.setState({ city, weatherInformation });
  };


  render() {
    const {
      weatherInformation,
      city,
    } = this.state;

    return (
      <div className="weather-details">
        {weatherInformation ? (
          <React.Fragment>
            <div>
              <div className="weather-details-wrapper">
                <div className="weather-details__item u-font-size-xxl">
                  {`${Math.round(weatherInformation.main.temp)}º`}
                </div>
                <div className="weather-details__item u-font-size-m">
                  {weatherInformation.weather.main}
                </div>
                <div className="weather-details__item u-font-size-s">
                  {`${city[0].long_name}`}
                </div>
              </div>
            </div>
          </React.Fragment>
        ) : (
          <p className="u-font-size-s">Fetching weather data...</p>
        )}
      </div>
    );
  }
}

export default Weather;
