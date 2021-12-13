import React from 'react';
import ReactDOM from 'react-dom';
import { WeatherPage } from 'pages';
import './index.css';

console.log("NETLIFY TEST: ",process.env.REACT_APP_TEST);

ReactDOM.render(
  <React.StrictMode>
    <WeatherPage />
  </React.StrictMode>,
  document.getElementById('root')
);