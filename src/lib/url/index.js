export const encode = value =>
  encodeURIComponent(value)
    .replace(/'/g, "%27")
    .replace(/"/g, "%22");
export const decode = value => decodeURIComponent(value.replace(/\+/g, " "));
