export const messageReducer = (state, action) => {
  switch (action.type) {
    case "DELETE_SUCCESS":
      return {
        content: "Delete task success",
        status: " success",
        type: "Notice",
      };

    default:
      return { ...state };
  }
};
