import WeatherDetails from "components/WeatherDetails";
import WeatherCard from "components/WeatherCard";
import css from "./Weather.module.css";
import { inject, observer } from "mobx-react";
import { useEffect } from "react";
import classNames from "classnames";
import Loader from "components/Loader";
import NoData from "components/NoData";
import ErrorBoundary from "components/ErrorBoundary";

function WeatherPage(props) {
  const { weatherStore } = props;
  const { weatherLoading, city, weathers, currentWeather, setCurrentWeather } =
    weatherStore;
  const currentWeatherId = currentWeather?.id || "";

  useEffect(() => {
    const { getWeatherData } = weatherStore;
    getWeatherData();
  }, [weatherStore]);

  if (weatherLoading) {
    return (
      <section className={css.otherStateContainer}>
        <Loader />
      </section>
    );
  }

  if (!(weathers && weathers.length)) {
    return (
      <section className={css.otherStateContainer}>
        <NoData />
      </section>
    );
  }
  return (
    <main>
      <section className={css.displayContainer}>
        <ErrorBoundary>
          <WeatherDetails city={city} weather={currentWeather} />
        </ErrorBoundary>
      </section>
      <section className={css.weatherPanel}>
        <ErrorBoundary>
          {weathers.map((weather) => {
            const { id } = weather;
            return (
              <section
                key={id}
                className={classNames(css.weatherCardContainer, {
                  [css.selectedWeatherCard]: currentWeatherId === id,
                })}
              >
                <WeatherCard
                  weather={weather}
                  onWeatherSelect={setCurrentWeather}
                />
              </section>
            );
          })}
        </ErrorBoundary>
      </section>
    </main>
  );
}

export default inject("weatherStore")(observer(WeatherPage));
