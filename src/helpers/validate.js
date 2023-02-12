const validateFields = (state) => {
  const values = Object.values(state);
  const minimumLength = 1;

  if (values.length) {
    return values.every((value) => value.toString().length >= minimumLength);
  }

  return false;
};

export default validateFields;
