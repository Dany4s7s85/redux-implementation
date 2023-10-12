const increament = () => {
  return {
    type: "i",
  };
};
const decreament = () => {
  return {
    type: "d",
  };
};

const reset = () => {
  return {
    type: "r",
  };
};

export default { increament, decreament, reset };
