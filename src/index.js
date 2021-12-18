import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "mobx-react";
import "./index.css";
import WeatherPage from "pages/Weather";
import allStores from "stores";

ReactDOM.render(
  <React.StrictMode>
    <Provider {...allStores}>
      <WeatherPage />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
