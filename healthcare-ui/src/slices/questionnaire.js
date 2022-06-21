import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import QuestionnaireService from "../services/QuestionnaireService";

const initialState = [];

export const submitAnswer = createAsyncThunk("sumit", async (data) => {
  const res = await QuestionnaireService.submit(data);
  return res.data;
});

// export const retrieveTutorials = createAsyncThunk(
//   "tutorials/retrieve",
//   async () => {
//     const res = await QuestionnaireService.getAll();
//     return res.data;
//   }
// );

// export const updateTutorial = createAsyncThunk(
//   "tutorials/update",
//   async ({ id, data }) => {
//     const res = await QuestionnaireService.update(id, data);
//     return res.data;
//   }
// );

// export const deleteTutorial = createAsyncThunk(
//   "tutorials/delete",
//   async ({ id }) => {
//     await QuestionnaireService.remove(id);
//     return { id };
//   }
// );

// export const deleteAllTutorials = createAsyncThunk(
//   "tutorials/deleteAll",
//   async () => {
//     const res = await QuestionnaireService.removeAll();
//     return res.data;
//   }
// );

// export const findTutorialsByTitle = createAsyncThunk(
//   "tutorials/findByTitle",
//   async ({ title }) => {
//     const res = await QuestionnaireService.findByTitle(title);
//     return res.data;
//   }
// );

const questionnaireSlice = createSlice({
  name: "questionnaire",
  initialState,
  extraReducers: {
    [submitAnswer.fulfilled]: (state, action) => {
      state = action.payload;
    },
    // [retrieveTutorials.fulfilled]: (state, action) => {
    //   return [...action.payload];
    // },
    // [updateTutorial.fulfilled]: (state, action) => {
    //   const index = state.findIndex(
    //     (tutorial) => tutorial.id === action.payload.id
    //   );
    //   state[index] = {
    //     ...state[index],
    //     ...action.payload,
    //   };
    // },
    // [deleteTutorial.fulfilled]: (state, action) => {
    //   let index = state.findIndex(({ id }) => id === action.payload.id);
    //   state.splice(index, 1);
    // },
    // [deleteAllTutorials.fulfilled]: (state, action) => {
    //   return [];
    // },
    // [findTutorialsByTitle.fulfilled]: (state, action) => {
    //   return [...action.payload];
    // },
  },
});

const { reducer } = questionnaireSlice;
export default reducer;
