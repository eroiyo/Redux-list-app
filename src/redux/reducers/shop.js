const SET_SHOP = 'Redux-list-app/src/redux/reducer/SET_SHOP';
const GET_SHOP = 'Redux-list-app/src/redux/reducer/GET_SHOP';

const initialState = [];

export const shop = () => ({
  type: GET_SHOP,
});

export const Setshop = (payload) => ({
  type: SET_SHOP,
  payload
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SHOP: {
      return [...state, ...action.payload];
    }
    default:
      return state;
  }
};

export default reducer;
