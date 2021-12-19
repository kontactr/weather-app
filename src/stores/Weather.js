import { API_ROUTES } from "config/constants";
import { observable, action, makeObservable } from "mobx";
import api from "utils/api";
import { convertTempFromKelToCel, formatDate, showToastMessage } from "utils";
import { TOAST_TYPES, UI_MESSAGES } from "config/constants";

export default class WeatherStore {
  @observable weatherLoading = false;
  @observable weathers = [];
  @observable city = {};
  @observable currentWeather = {};

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
      if (weathers && weathers.length) {
        const modifiedWeathers = this.modifiedWeathers(weathers);
        this.weathers = modifiedWeathers;
        this.currentWeather = modifiedWeathers[0];
      }
      this.city = response.data?.city || {};
    } catch (error) {
      if (!(this.weathers && this.weathers.length)) {
        this.weathers = [];
      }
      showToastMessage(TOAST_TYPES.ERROR, UI_MESSAGES.FAILED_TO_LOAD_WEATHERS);
    } finally {
      this.weatherLoading = false;
    }
  };
}
