import WeatherDetails from "components/WeatherDetails";
import WeatherCard from "components/WeatherCard";
import css from "./weather.module.css";

export default function WeatherPage() {
  return (
    <main>
      <section className={css.displayContainer}>
        <WeatherDetails />
      </section>
      <section className={css.weatherPanel}>
        {Array(17)
          .fill(1)
          .map((_, index) => {
            return (
              <section key={index} className={css.weatherCardContainer}>
                <WeatherCard />
              </section>
            );
          })}
      </section>
    </main>
  );
}
