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
