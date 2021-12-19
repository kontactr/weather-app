import images from "assets/images";
import css from "./noData.module.css";

const { noData } = images;

export default function NoData() {
  return (
    <article className={css.noDataContainer}>
      <img src={noData.image} alt={noData.alt} />
      <div className={css.noDataText}>No Data Found.</div>
      <section className={css.creditSection}>
        <div>
          Icons made by{" "}
          <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
            Freepik
          </a>{" "}
          from{" "}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
        </div>
      </section>
    </article>
  );
}
