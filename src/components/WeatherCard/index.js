import classNames from "classnames";
import images, { getImageKey } from "assets/images";
import css from "./weatherCard.module.css";

export default function WeatherCard(props) {
  const { weather, onWeatherSelect } = props;
  const { temperature, parsedDate, weatherImageCode } = weather || {};
  const { minutes, hours } = parsedDate || {};

  const imageKey = getImageKey(weatherImageCode);
  const weatherImage = images[imageKey];

  return (
    <article
      className={css.weatherCardContainer}
      onClick={() => {
        onWeatherSelect && onWeatherSelect(weather);
      }}
    >
      <span className={classNames(css.itemContainer, css.timeContainer)}>
        {hours}:{minutes}
      </span>
      <span className={classNames(css.itemContainer, css.weatherLogoContainer)}>
        <img
          src={weatherImage.image}
          alt={weatherImage.alt}
          className={css.weatherImage}
        />
      </span>
      <span className={classNames(css.itemContainer, css.temperatureContainer)}>
        {temperature}
      </span>
    </article>
  );
}
