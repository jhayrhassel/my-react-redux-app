import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const geoURL = `https://api.geoapify.com/v1/ipinfo?apiKey=${process.env.REACT_APP_GEOAPIFY_API_KEY}`;

export const loadGeo = createAsyncThunk("weather/loadGeo", async () => {
  const response = await fetch(geoURL);
  const json = await response.json();

  return {
    latitude: json.location.latitude,
    longitude: json.location.longitude,
  };
});

export const loadWeather = createAsyncThunk(
  "weather/loadWeather",
  async ({ latitude, longitude }) => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${process.env.REACT_APP_OPENWEATHERMAP_APP_ID}`
    );
    const json = await response.json();

    return {
      location: json.name,
      temp: json.main.temp,
      description: json.weather[0].description,
      icon: json.weather[0].icon,
      country: json.sys.country,
    };
  }
);

export const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    isGeoLoading: false,
    failedToLoadGeo: false,
    isWeatherLoading: false,
    failedToLoadWeather: false,
    latitude: "",
    longitude: "",
    location: "",
    temp: "",
    description: "",
    icon: "",
    country: "",
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadGeo.pending, (state) => {
        state.isGeoLoading = true;
        state.failedToLoadGeo = false;
      })
      .addCase(loadGeo.rejected, (state) => {
        state.isGeoLoading = false;
        state.failedToLoadGeo = true;
      })
      .addCase(loadGeo.fulfilled, (state, action) => {
        const { latitude, longitude } = action.payload;
        state.isGeoLoading = false;
        state.failedToLoadGeo = false;
        state.latitude = latitude;
        state.longitude = longitude;
      })
      .addCase(loadWeather.pending, (state) => {
        state.isWeatherLoading = true;
        state.failedToLoadWeather = false;
      })
      .addCase(loadWeather.rejected, (state) => {
        state.isWeatherLoading = false;
        state.failedToLoadWeather = true;
      })
      .addCase(loadWeather.fulfilled, (state, action) => {
        const { location, temp, description, icon, country } = action.payload;
        state.isWeatherLoading = false;
        state.failedToLoadWeather = false;
        state.location = location;
        state.temp = temp;
        state.description = description;
        state.icon = icon;
        state.country = country;
      });
  },
});

export const selectLatitude = (state) => state.weather.latitude;
export const selectLongitude = (state) => state.weather.longitude;
export const selectLocation = (state) => state.weather.location;
export const selectTemp = (state) => state.weather.temp;
export const selectDescription = (state) => state.weather.description;
export const selectIcon = (state) => state.weather.icon;
export const selectCountry = (state) => state.weather.country;
export const selectIsWeatherLoading = (state) => state.weather.isWeatherLoading;
export const selectFailedToLoadWeather = (state) =>
  state.weather.failedToLoadWeather;

export default weatherSlice.reducer;
