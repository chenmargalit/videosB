const validateMass = (mass) => {
  if (typeof mass !== 'number') {
    mass = parseInt(mass);
  }
  return mass;
};

module.exports = { validateMass };
