import { createStore, compose } from "redux";
import { rootReducers } from "../reducers";

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducers, storeEnhancers());
