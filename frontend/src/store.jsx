import { configureStore } from "@reduxjs/toolkit";

// reducers
import userReducer from "./reducers/userReducer";
import productReducer from "./reducers/productReducer";
import cartReducer from "./reducers/cartReducer";

import {
  newOrderReducer,
  myOrderReducer,
  singleOrderDetailsReducer,
  allOrderReducer,
  updateAndDeleteOrderReducer,
} from "./reducers/orderReducer";

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
    products: productReducer,

    // ✅ ORDER reducers (VERY IMPORTANT)
    newOrder: newOrderReducer,
    myOrder: myOrderReducer,
    singleOrderDetails: singleOrderDetailsReducer,
    allOrder: allOrderReducer,
    updateAndDeleteOrder: updateAndDeleteOrderReducer,
  },
  devTools: import.meta.env.MODE !== "production",
});

export default store;
