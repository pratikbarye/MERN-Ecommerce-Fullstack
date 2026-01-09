import { configureStore } from "@reduxjs/toolkit";

// Import your reducers
// import authReducer from "./reducers/authReducer";
import userReducer from "./reducers/userReducer";
import productReducer from "./reducers/productReducer";
import cartReducer from "./reducers/cartReducer";
import orderReducer from "./reducers/orderReducer";

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
    product: productReducer,
    order: orderReducer,
  },
  devTools: import.meta.env.MODE !== "production",
});

export default store;
