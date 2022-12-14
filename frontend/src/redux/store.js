import {
  applyMiddleware,
  combineReducers,
  legacy_createStore,
  compose,
} from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./Auth/reducer";
import { dashboard_Reducer } from "./Dashboard/reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  dashboard: dashboard_Reducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
