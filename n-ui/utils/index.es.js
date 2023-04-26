const toLine = (value) => {
  return value.replace(/(A-Z)g/, "-$1").toLocaleLowerCase();
};
const camelCaseToHyphen = (key) => {
  const c = key.split("");
  key = c.map((item) => item.toUpperCase() === item ? "-" + item.toLowerCase() : item);
  return key.join("");
};
export { camelCaseToHyphen, toLine };
