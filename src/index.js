import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "mobx-react";
import "./index.css";
import WeatherPage from "pages/Weather";
import allStores from "stores";
import ErrorBoundary from "components/ErrorBoundary";
import ToastContainer from "components/ToastContainer";

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary fullPage>
      <Provider {...allStores}>
        <WeatherPage />
      </Provider>
      <ToastContainer />
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById("root")
);
