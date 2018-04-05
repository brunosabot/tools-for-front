export default true;
export const getDate = (timestamp, millisecondMode) => {
  let t = parseInt(timestamp, 10);

  if (millisecondMode === false && `${timestamp}`.length <= 10) {
    t *= 1000;
  }

  const date = new Date(t);

  return {
    year: date.getUTCFullYear(),
    month: date.getUTCMonth() + 1,
    day: date.getUTCDate(),
    hours: date.getUTCHours(),
    minutes: date.getUTCMinutes(),
    seconds: date.getUTCSeconds(),
    milliseconds: date.getUTCMilliseconds()
  };
};

export const getIsoDate = (timestamp, millisecondMode) => {
  let t = parseInt(timestamp, 10);

  if (millisecondMode === false && `${timestamp}`.length <= 10) {
    t *= 1000;
  }

  const date = new Date(t);

  return date.toUTCString();
};
