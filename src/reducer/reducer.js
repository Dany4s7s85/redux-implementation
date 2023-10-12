const initialState = 0;
const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "i":
      return state + 1;
    case "d":
      return state - 1;
    case "r":
      return initialState;
    default:
      return state;
  }
};

export default Reducer;
