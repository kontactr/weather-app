import ReactLoader from "react-loader-spinner";
import css from "./loader.module.css";

export default function Loader() {
  return (
    <section className={css.loaderClassContainer}>
      <ReactLoader
        type={"BallTriangle"}
        color={"#ffc700"}
        height={200}
        width={200}
      />
    </section>
  );
}
