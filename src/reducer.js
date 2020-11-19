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
    case "REMOVED_FROM_BASKET":
      // LOGIC FOR ADDING TO BASKET
      const index = state.basket.findIndex(
        (item) => item.id === action.payload.id
      );

      let newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cannot remove basket item (id: ${action.payload.id}) as it is not in the basket.`
        );
      }
      return { ...state, basket: newBasket };
    default:
      return state;
  }
}

export default reducer;

/*
 */
