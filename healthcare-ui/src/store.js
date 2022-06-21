import { configureStore } from "@reduxjs/toolkit";
import questionnaireSlice from "./slices/questionnaire";

const reducer = {
  tutorials: questionnaireSlice,
};

const store = configureStore({
  reducer: reducer,
  devTools: true,
});

export default store;
