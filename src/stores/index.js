import WeatherStore from "./Weather";

const initStores = () => {
  return {
    weatherStore: new WeatherStore(),
  };
};

const allStores = initStores();

export default allStores;
