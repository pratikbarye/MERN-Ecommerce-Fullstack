import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;

import { addNewProductReducer, allProductReviewReducer, deleteProductReviewReducer, deleteUpdateProductReducer, newReviewReducer, productReducer, singleProductReducer } from './reducers/productReducer';
import { allUserReducer, profileReducer, singleUserDetailReducer, updateAndDeleteUserReducer, userReducer } from './reducers/userReducer';
import { cartReducre } from './reducers/cartReducre';
import { allOrderReducer, myOrderReducer, newOrderReducer, singleOrderDetailsReducer, updateAndDeleteOrderReducer } from './reducers/orderReducer';

const reducer = combineReducers({
    products: productReducer,
    singleProduct: singleProductReducer,
    user: userReducer,
    profile: profileReducer,
    cart: cartReducre,
    newOrder: newOrderReducer,
    myOrders: myOrderReducer,
    singleOrderDetails: singleOrderDetailsReducer,
    newReview: newReviewReducer,
    newProduct: addNewProductReducer,
    deleteUpdateProduct: deleteUpdateProductReducer,
    allOrder: allOrderReducer,
    updateAndDeleteOrder: updateAndDeleteOrderReducer,
    allUser: allUserReducer,
    singleUserDetail: singleUserDetailReducer,
    updateAndDeleteUser:updateAndDeleteUserReducer,
    allProductReview:allProductReviewReducer,
    deleteProductReview:deleteProductReviewReducer,
});

let initialState = {
    cart: {
        cartItems: localStorage.getItem("cartItems")
            ? JSON.parse(localStorage.getItem("cartItems"))
            : [],
        shippingInfo: localStorage.getItem("shippingInfo")
            ? JSON.parse(localStorage.getItem("shippingInfo"))
            : {},
    }
};

const middleware = [thunk];


const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
