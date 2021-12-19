import ReactLoader from "react-loader-spinner";
import { UI_MESSAGES } from "config/constants";
import css from "./loader.module.css";

export default function Loader(props) {
  const { type, color, height, width } = props;
  return (
    <article className={css.loaderContainer}>
      <ReactLoader
        type={type || "BallTriangle"}
        color={color || "#ffc700"}
        height={height || 200}
        width={width || 200}
      />
      <div className={css.loadingTextColor}>{UI_MESSAGES.LOADING}</div>
    </article>
  );
}
