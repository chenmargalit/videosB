const validateYear = (year) => {
  if (typeof year !== 'string') {
    year = year.toString();
  }
  return year;
};

module.exports = { validateYear };
