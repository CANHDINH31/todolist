export const addTask = (payload) => async (dispatch, getState) => {
  dispatch({
    type: "ADD_TASK",
    payload,
  });
};

export const deleteTask = (payload) => async (dispatch) => {
  dispatch({
    type: "DELETE_TASK",
    payload,
  });
};

export const updateTask = (payload) => async (dispatch) => {
  dispatch({
    type: "UPDATE_TASK",
    payload,
  });
};

export const searchTask = (payload) => async (dispatch) => {
  dispatch({
    type: "SEARCH_TASK",
    payload,
  });
};

export const restoreTask = (payload) => async (dispatch) => {
  dispatch({
    type: "RESTORE_TASK",
  });
};
