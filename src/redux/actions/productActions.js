export const setCategories = (categories) => ({ type: 'SET_CATEGORIES', payload: categories });
export const setProductList = (productList) => ({ type: 'SET_PRODUCT_LIST', payload: productList });
export const setTotal = (total) => ({ type: 'SET_TOTAL', payload: total });
export const setFetchState = (fetchState) => ({ type: 'SET_FETCH_STATE', payload: fetchState });
export const setLimit = (limit) => ({ type: 'SET_LIMIT', payload: limit });
export const setOffset = (offset) => ({ type: 'SET_OFFSET', payload: offset });
export const setFilter = (filter) => ({ type: 'SET_FILTER', payload: filter });


export const fetchCategories = () => {
    return async (dispatch) => {
      dispatch(setFetchState("FETCHING"));
      try {
        const response = await fetch("https://workintech-fe-ecommerce.onrender.com/categories");
        const data = await response.json();
        dispatch(setCategories(data));
        dispatch(setFetchState("FETCHED"));
      } catch (error) {
        console.error("Error fetching categories:", error);
        dispatch(setFetchState("ERROR"));
      }
    };
  };