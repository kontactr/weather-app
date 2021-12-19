import weatherCloud from "./weather-cloud.svg";
import weatherSun from "./weather-sun.svg";
import noData from "./no-data.png";

import weatherCloudFavIcon from "./weather-cloud.ico";
import weatherSunFavIcon from "./weather-sun.ico";

const images = {
  weatherCloud: {
    image: weatherCloud,
    alt: "weather-cloud-sun-image",
    favIcon: weatherCloudFavIcon,
  },

  weatherSun: {
    image: weatherSun,
    alt: "weather-full-sun-image",
    favIcon: weatherSunFavIcon,
  },

  noData: {
    image: noData,
    alt: "no-data",
    favIcon: null,
  },
};

export const IMAGE_CODES = {
  CLEAR: 800,
};
export const getImageKey = (statusCode) => {
  if (statusCode === IMAGE_CODES.CLEAR) {
    return "weatherSun";
  }
  return "weatherCloud";
};

export default images;
