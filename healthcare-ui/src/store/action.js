import { submit, saveUser } from "../services/QuestionnaireService";
import { SUBMIT_ANSWER, SAVE_USER_INFO } from "./types";

export const SubmitAnswer = (data) => async (dispatch) => {
  return submit(data).then((res) => {
    dispatch({
      type: SUBMIT_ANSWER,
      payload: res,
    });
    return res;
  });
};

export const SaveUserInfo = (data) => async (dispatch) => {
  return saveUser(data).then((res) => {
    dispatch({
      type: SAVE_USER_INFO,
      payload: res,
    });
    return res;
  });
};

// export const searchForTasks =
//   ({ search, filters, sort, limit, offset }) =>
//   async (dispatch) => {
//     return searchTasks({
//       search,
//       filters,
//       sort,
//       limit,
//       offset,
//     }).then((res) => {
//       dispatch({
//         type: SEARCH_FOR_TASKS,
//         payload: res,
//       });
//       return res;
//     });
//   };

// export const getAssignees = () => async (dispatch) => {
//   return getTasksAssignees().then((res) => {
//     dispatch({
//       type: GET_TASKS_ASSIGNEES,
//       payload: res,
//     });
//     return res;
//   });
// };

// export const addTask = (data) => async (dispatch) => {
//   return createTask(data).then((res) => {
//     dispatch({
//       type: ADD_TASK,
//       payload: res,
//     });
//     return res;
//   });
// };

// export const updateTask =
//   ({ projectId, taskId, updateData }) =>
//   async (dispatch) => {
//     return taskUpdate({ projectId, taskId, updateData });
//   };

// export const updateSummaryTask =
//   ({ projectId, taskId, updateData }) =>
//   async (dispatch) => {
//     return taskSummaryUpdate({ projectId, taskId });
//   };
