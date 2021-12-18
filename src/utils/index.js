export const isValidDate = (d) => {
  return d instanceof Date && !isNaN(d);
};

export const paddTime = (time) => {
  if (isNaN(time)) {
    return "-";
  }
  if (time > 9) {
    return `${time}`;
  }
  return `0${time}`;
};

export const formatDate = (date) => {
  const dateObj = new Date(date);
  if (isValidDate(dateObj)) {
    return {
      weekDay: dateObj.toLocaleString("default", {
        weekday: "long",
      }),
      day: dateObj.toLocaleString("default", {
        day: "numeric",
      }),
      month: dateObj.toLocaleString("default", {
        month: "long",
      }),
      hours: paddTime(dateObj.getHours()),
      minutes: paddTime(dateObj.getMinutes()),
    };
  }
  return {};
};

export const convertTempFromKelToCel = (temp) => {
  if (!isNaN(temp)) {
    return `${Math.round(temp - 273.15)}°`;
  }
  return undefined;
};
