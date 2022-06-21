import { submit } from "../services/QuestionnaireService";
import { SUBMIT_ANSWER } from "./types";

export const submitAnswer = (data) => async (dispatch) => {
  return submit(data).then((res) => {
    dispatch({
      type: SUBMIT_ANSWER,
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
