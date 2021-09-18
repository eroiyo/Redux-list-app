const SET_PRODUCTS = 'Redux-list-app/src/redux/reducer/SET_PRODUCTS';
const GET_PRODUCTS = 'Redux-list-app/src/redux/reducer/GET_PRODUCTS';

const initialState = new Map();

export const Getproducts = () => ({
  type: GET_PRODUCTS,
});

export const Setproducts = (payload) => ({
  type: SET_PRODUCTS,
  payload,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS: {
      const clone = new Map(state);
      clone.set(action.payload.key, action.payload.value);
      return clone;
    }
    case GET_PRODUCTS: {
      return state;
    }
    default: {
      return state;
    }
  }
};

export default reducer;
