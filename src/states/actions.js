export const getAllProducts = () => async (dispatch) => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const products = await response.json();
    dispatch({ type: "FETCH_PRODUCTS", payload: products });
  } catch (error) {
    dispatch({ type: "FETCH_PRODUCTS_ERROR", payload: error });
  }
};
export const getOneProduct = (id) => async (dispatch) => {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const productData = await response.json();
    dispatch({ type: "ONE_PRODUCT", payload: productData });
  } catch (error) {
    console.error("Error fetching product: ", error);
  }
};

export const addProduct = (product) => async (dispatch) => {
  try {
    const response = await fetch("https://fakestoreapi.com/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
    const data = await response.json();
    dispatch({ type: "ADD_PRODUCT", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteProduct = (id) => async (dispatch) => {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    console.log(data);
    dispatch({ type: "DELETE_PRODUCT", payload: id });
  } catch (error) {
    console.log(error);
  }
};

export const editProduct = (id, product) => async (dispatch) => {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
    const data = await response.json();
    console.log(data);
    dispatch({ type: "EDIT_PRODUCT", payload: data });
  } catch (error) {
    console.log(error);
  }
};
