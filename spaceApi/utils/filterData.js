const filterByYear = (yearProperty, inputYear) => {
  if (yearProperty) {
    return yearProperty.split('-')[0] === inputYear;
  }
};

const filterByMass = (massProperty, inputMass) => {
  // console.log('reached filterByMass');
  // console.log('mass in filterByMass', massProperty);
  return massProperty > inputMass;
};

module.exports = { filterByYear, filterByMass };
