import { configureStore } from "@reduxjs/toolkit";
// import { createStoreHook } from "react-redux";
// import { applyMiddleware } from "redux";

import logger from "redux-logger";
import thunk from "redux-thunk";
import cartReducer from "./cart/cart.reducer";

//local import
// import rootReducer from "./root-reducer";
import userReducer from "./user/user.reducer";

// const middlewares = [logger];
const store = configureStore({
	reducer: { user: userReducer, cart: cartReducer },
	middleware: [thunk, logger],
});

export default store;
