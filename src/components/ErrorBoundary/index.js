import React from "react";
import { UI_MESSAGES } from "config/constants";
import css from "./errorBoundary.module.css";
import classNames from "classnames";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    const { hasError } = this.state;
    const { fullPage = false } = this.props;
    if (hasError) {
      return (
        <article
          className={classNames(css.errorBoundaryContainer, {
            [css.fullPage]: fullPage,
          })}
        >
          <div className={css.errorText}>
            {UI_MESSAGES.SOMETHING_WENT_WRONG}
          </div>
          <div className={css.errorToDoText}>
            {UI_MESSAGES.TRY_LATER_OR_REFRESH}
          </div>
        </article>
      );
    }

    return this.props.children;
  }
}
