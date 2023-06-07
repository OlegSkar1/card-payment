export const getCurrentDate = (date: Date) => {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  const result = {
    day: day < 10 ? `0${day}` : day,
    month: month < 10 ? `0${month}` : month,
    year,
  };

  return `${result.day}.${result.month}.${result.year}`;
};

export const getCurrentTime = (date: Date) => {
  const hours = date.getHours();
  const minutes = date.getMinutes();

  const result = {
    hours: hours < 10 ? `0${hours}` : hours,
    minutes: minutes < 10 ? `0${minutes}` : minutes,
  };

  return `${result.hours}:${result.minutes}`;
};
