import classNames from "classnames";
import images, { getImageKey } from "assets/images";
import css from "./weatherDetails.module.css";

export default function WeatherDetails(props) {
  const { city, weather } = props;
  const { name: cityName } = city || {};
  const {
    temperature,
    weatherText,
    maxTemp,
    minTemp,
    parsedDate,
    weatherImageCode,
  } = weather || {};
  const { weekDay, day, month } = parsedDate || {};

  const imageKey = getImageKey(weatherImageCode);
  const weatherImage = images[imageKey];

  return (
    <section className={css.topDetailsContainer}>
      <article
        className={classNames(css.topDetailsItems, css.weatherLogoContainer)}
      >
        <img
          src={weatherImage.image}
          alt={weatherImage.alt}
          className={css.weatherLogo}
        />
      </article>
      <section className={classNames(css.topDetailsItems, css.infoContainer)}>
        <article className={classNames(css.topInfo)}>
          <span>{weatherText || "-"}</span>
          <span>
            {minTemp || "-"}/{maxTemp || "-"}
          </span>
        </article>
        <article className={classNames(css.currentTemperature)}>
          <span>{temperature || "-"}</span>
        </article>
      </section>
      <article className={classNames(css.topDetailsItems, css.infoContainer)}>
        <article className={classNames(css.topInfo)}>
          <span>{cityName || "-"}</span>
        </article>
        <article className={classNames(css.currentDay)}>
          <div>{weekDay || "-"}</div>
          <div>
            {day || "-"}. {month || "-"}
          </div>
        </article>
      </article>
    </section>
  );
}
