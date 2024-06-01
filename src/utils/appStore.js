const { configureStore } = require("@reduxjs/toolkit");
import cartReducer from "./cartSlice";

const appStore = configureStore({
  // the store reducer is responsible for modifying the store.
  // it collates all small slice reducers.
  reducer: {
    cart: cartReducer,
  },
});

export default appStore;
