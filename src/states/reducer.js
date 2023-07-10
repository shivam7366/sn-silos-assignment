const initState = {
  products: [],
  isLoading: true,
  error: null,
  open: false,
  product: {},
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS":
      return {
        ...state,
        products: action.payload,
        isLoading: false,
      };
    case "FETCH_PRODUCTS_ERROR":
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    case "ADD_PRODUCT":
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case "ONE_PRODUCT":
      return {
        ...state,
        product: action.payload,
      };

    case "DELETE_PRODUCT":
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload
        ),
      };
    case "EDIT_PRODUCT":
      return {
        ...state,
        product: action.payload,
      };
    case "LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "LOADING_DONE":
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default reducer;
