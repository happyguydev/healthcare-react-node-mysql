import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { SUBMIT_ANSWER } from "./types";

const initialState = {
  result: [],
};

const persistConfig = {
  storage,
  key: "result",
  whitelist: ["result"],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_ANSWER:
      return action.payload;
    // case GET_TASKS_ASSIGNEES:
    //   return {
    //     ...state,
    //     assignees: action.payload,
    //   };

    // case ADD_TASK:
    //   const tasks = state?.tasks;
    //   return {
    //     ...state,
    //     tasks: [action.payload].concat(tasks),
    //   };
    // case CLEAR_FILTERED_TASKS:
    //   return {
    //     ...state,
    //     tasks: [],
    //   };
    default:
      return state;
  }
};

export default persistReducer(persistConfig, reducer);
