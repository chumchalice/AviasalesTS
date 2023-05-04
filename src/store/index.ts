import { legacy_createStore as createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import { rootReducer } from "./reducers/rootReducer";

// const logerMiddleware = (store) => (next) => (action) => {
//   const result = next(action);
//   return result;
// };

export const store = createStore(rootReducer, applyMiddleware(reduxThunk));
