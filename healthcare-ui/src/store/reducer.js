import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { SUBMIT_ANSWER, SAVE_USER_INFO } from "./types";

const initialState = {
  email: "",
  status: "",
  role: "user",
  createdAt: "",
  updatedAt: "",
};

const persistConfig = {
  storage,
  key: "email",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_ANSWER:
      return {
        ...action.payload,
        role: action.payload.role_id === 1 ? "adimin" : "user",
      };
    case SAVE_USER_INFO:
      return {
        ...action.payload,
        role: action.payload.role_id === 1 ? "adimin" : "user",
      };
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
