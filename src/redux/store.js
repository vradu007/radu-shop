import { createStore, combineReducers, applyMiddleware } from "redux";
import { cartReducer } from "./cart/cartReducer";
import { userReducer } from "./user/userReducer";
import { favouritesReducer } from "./favourites/favouritesReducer";
import thunk from "redux-thunk";
import logger from "redux-logger";

const rootReducer = combineReducers({
	cart: cartReducer,
	user: userReducer,
	favourites: favouritesReducer,
});

const middlewares = [thunk, logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
