import classNames from "classnames";
import { weatherCloud, weatherSun } from "assets/images";
import css from "./weatherCard.module.css";

export default function WeatherCard(props) {
  return (
    <article className={css.weatherCardContainer}>
      <span className={classNames(css.itemContainer, css.timeContainer)}>
        14:00
      </span>
      <span className={classNames(css.itemContainer, css.weatherLogoContainer)}>
        <img src={weatherSun} />
      </span>
      <span className={classNames(css.itemContainer, css.temperatureContainer)}>
        12°
      </span>
    </article>
  );
}
