import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./reducer";

const middleware = [thunk];

export const store = createStore(
  rootReducer,
  undefined,
  composeWithDevTools(applyMiddleware(...middleware))
);

export const persistor = persistStore(store);
