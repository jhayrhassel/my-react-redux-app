import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  loadGeo,
  loadWeather,
  selectCountry,
  selectDescription,
  selectFailedToLoadWeather,
  selectIcon,
  selectIsWeatherLoading,
  selectLatitude,
  selectLocation,
  selectLongitude,
  selectTemp,
} from "./weatherSlice";

const Weather = () => {
  const dispatch = useDispatch();
  const latitude = useSelector(selectLatitude);
  const longitude = useSelector(selectLongitude);
  const location = useSelector(selectLocation);
  const temp = useSelector(selectTemp);
  const description = useSelector(selectDescription);
  const icon = useSelector(selectIcon);
  const country = useSelector(selectCountry);
  const isWeatherLoading = useSelector(selectIsWeatherLoading);
  const failedToLoadWeather = useSelector(selectFailedToLoadWeather);

  useEffect(() => {
    dispatch(loadGeo());
    console.log("latitude: " + latitude);
    console.log("longitude: " + longitude);
    dispatch(loadWeather({ latitude, longitude }));
  }, [dispatch, latitude, longitude]);

  return (
    <div className="weather">
      {!isWeatherLoading && !failedToLoadWeather && <div className="weather-container">
        <img
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          alt={description}
          className="weather-icon"
        />
        <div className="temperature-container">
          <p className="location">
            {location}, {country}
          </p>
          <h1 className="temperature">{temp}&deg;C</h1>
          <p className="description">{description}</p>
        </div>
      </div>}
    </div>
  );
};

export default Weather;
