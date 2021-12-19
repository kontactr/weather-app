import { API_ROUTES } from "config/constants";
import { observable, action, makeObservable } from "mobx";
import api from "utils/api";
import { convertTempFromKelToCel, formatDate, showToastMessage } from "utils";
import { TOAST_TYPES, UI_MESSAGES, LOCAL_STORAGE_KEYS } from "config/constants";
import { getPersistedData, persistData } from "utils";

export default class WeatherStore {
  @observable weatherLoading = false;
  @observable weathers =
    getPersistedData(LOCAL_STORAGE_KEYS.WEATHERS_DATA) || [];
  @observable city = getPersistedData(LOCAL_STORAGE_KEYS.CITY) || {};
  @observable currentWeather =
    getPersistedData(LOCAL_STORAGE_KEYS.CURRENT_WEATHER_DATA) || {};

  constructor() {
    makeObservable(this);
  }

  @action
  setCurrentWeather = (weather) => {
    this.currentWeather = weather || {};
  };

  modifiedWeathers = (weathers = []) => {
    return (weathers || []).map((wd) => {
      const { dt_txt, dt, main, sys, weather } = wd || {};
      const { temp_min, temp_max, temp } = main || {};
      const { prod } = sys || {};
      let record = {};
      if (weather && weather.length) {
        record = weather[0];
      }
      return {
        temperature: convertTempFromKelToCel(temp) || "-",
        minTemp: convertTempFromKelToCel(temp_min) || "-",
        maxTemp: convertTempFromKelToCel(temp_max) || "-",
        id: dt_txt,
        timestamp: dt,
        isDay: prod === "d",
        weatherText: record?.main,
        weatherImageCode: record?.id,
        parsedDate: formatDate(dt_txt),
      };
    });
  };

  @action
  getWeatherData = async () => {
    try {
      this.weatherLoading = true;
      const response = await api.get(API_ROUTES.GET_WEATHERS);
      const weathers = response.data?.list || [];
      const city = response.data?.city || {};
      if (weathers && weathers.length) {
        const modifiedWeathers = this.modifiedWeathers(weathers);
        this.weathers = modifiedWeathers;
        this.currentWeather = modifiedWeathers[0];

        persistData(LOCAL_STORAGE_KEYS.WEATHERS_DATA, modifiedWeathers);
        persistData(
          LOCAL_STORAGE_KEYS.CURRENT_WEATHER_DATA,
          modifiedWeathers[0]
        );
      }

      this.city = city;
      persistData(LOCAL_STORAGE_KEYS.CITY, city);
    } catch (error) {
      showToastMessage(TOAST_TYPES.ERROR, UI_MESSAGES.FAILED_TO_LOAD_WEATHERS);
      if (!(this.weathers && this.weathers.length)) {
        this.weathers = [];
      } else {
        showToastMessage(
          TOAST_TYPES.WARNING,
          UI_MESSAGES.SHOWING_PREVIOUS_DATA
        );
      }
    } finally {
      this.weatherLoading = false;
    }
  };
}
