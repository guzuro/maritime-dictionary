const requiredInput = (value: string, label: string, length = 0) => {
  return (value && value.length > length) || `${label} field is required`;
};

export { requiredInput };
