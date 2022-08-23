import { configureStore } from "@reduxjs/toolkit";
// import { createStoreHook } from "react-redux";
// import { applyMiddleware } from "redux";

import logger from "redux-logger";
import thunk from "redux-thunk";

//local import
// import rootReducer from "./root-reducer";
import userReducer from "./user/user.reducer";

// const middlewares = [logger];
const store = configureStore({
	reducer: { user: userReducer },
	middleware: [thunk, logger],
});

export default store;
