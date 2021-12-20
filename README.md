[![Netlify Status](https://api.netlify.com/api/v1/badges/4c2901e6-6cd0-4d03-9fc4-d9e2e9e4da02/deploy-status)](https://app.netlify.com/sites/yg-weather-assignment/deploys)

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). This project is also customized using [customize-cra](https://www.npmjs.com/package/customize-cra) and [react-app-rewired](https://www.npmjs.com/package/react-app-rewired) to use [mobx-decorators](https://mobx.js.org/enabling-decorators.html) and [optional-chainings](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining).
This project is a single page application, and it uses OpenWeatherMap API to show weather data. 

# Note

This project uses [CORS proxy server](https://secret-ocean-49799.herokuapp.com) to access openWeatherMap apis. It is hosted on heroku and it's a third party server.


## Available Scripts

In the project directory, you can run:

### `yarn` or `yarn install`

This command installs all the required dependencies to run this project.

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `Deployment`

This project is hosted on Netlify's environment with the build pipeline of the main branch. \
You can visit [here](https://yg-weather-assignment.netlify.app/)

# How To & References

### `How To`

- Users have to just load or open the website to show the weather data.


### `Third-Party packages`

- [axios](https://www.npmjs.com/package/axios) - For api calling
- [mobx](https://www.npmjs.com/package/mobx) & [mobx-react](https://www.npmjs.com/package/mobx-react) - For state management.
- [react-loader-spinner](https://www.npmjs.com/package/react-loader-spinner) - For loading screen
- [react-toastify](https://www.npmjs.com/package/react-toastify) - To show toast messages.


### `Readme Editor`

- [Markdown Editor](https://jbt.github.io/markdown-editor/) - This readme is built using this editor.