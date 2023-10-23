export const validateAge = (input) => {
  if (isNaN(input)) return 'Please enter valide age';
  return true;
};