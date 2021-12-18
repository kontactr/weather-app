import classNames from "classnames";
import { weatherCloud, weatherSun } from "assets/images";
import css from "./weatherDetails.module.css";

export default function WeatherDetails() {
  return (
    <section className={css.topDetailsContainer}>
      <article
        className={classNames(css.topDetailsItems, css.weatherLogoContainer)}
      >
        <img src={weatherCloud} />
      </article>
      <section className={classNames(css.topDetailsItems, css.infoContainer)}>
        <article className={classNames(css.topInfo)}>
          <span>Cloudy</span>
          <span>12°/2°</span>
        </article>
        <article className={classNames(css.currentTemperature)}>
          <span>12°</span>
        </article>
      </section>
      <article className={classNames(css.topDetailsItems, css.infoContainer)}>
        <article className={classNames(css.topInfo)}>
          <span>Munich</span>
        </article>
        <article className={classNames(css.currentDay)}>
          <div>Thursday</div>
          <div>28. March</div>
        </article>
      </article>
    </section>
  );
}
