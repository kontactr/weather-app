export const CONSTANTS = {
  API_TIMEOUT: 5000,
};

export const ENV = {
  BASE_SERVER_URI: "",
};

export const API_ROUTES = {
  GET_WEATHERS:
    "https://secret-ocean-49799.herokuapp.com/https://samples.openweathermap.org/data/2.5/forecast?q=M%C3%BCnchen,DE&appid=b6907d289e10d714a6e88b30761fae22",
};

export const TOAST_TYPES = {
  ERROR: "error",
  INFO: "info",
  SUCCESS: "success",
  WARNING: "warn",
};

export const UI_MESSAGES = {
  FAILED_TO_LOAD_WEATHERS: "Could not load weathers data!",
  LOADING: "Loading...",
  SOMETHING_WENT_WRONG: "Something went wrong.",
  TRY_LATER_OR_REFRESH: "Please try again later or refresh the page.",
  SHOWING_PREVIOUS_DATA: "Showing previously loaded data.",
};

export const LOCAL_STORAGE_KEYS = {
  WEATHERS_DATA: "weathers",
  CURRENT_WEATHER_DATA: "currentWeather",
  CITY: "city",
};
