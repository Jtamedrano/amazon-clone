export const initialState = {
  basket: [],
};
export const getBasketTotal = (items) => {
  return items.reduce((prev, curr) => prev + curr.price, 0);
};
function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      // LOGIC FOR ADDING TO BASKET
      return { ...state, basket: [...state.basket, action.payload] };
    case "REMOVE_FROM_BASKET":
      // LOGIC FOR ADDING TO BASKET
      return state;
    default:
      return state;
  }
}

export default reducer;

/*
 */
