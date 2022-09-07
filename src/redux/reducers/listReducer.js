import { v4 as uuidv4 } from "uuid";

export const listReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      if (action.payload.typeTask === "TO DO") {
        state.columns[0].cards.push({
          id: uuidv4(),
          title: action.payload.nameTask,
          time: action.payload.time,
        });
      } else if (action.payload.typeTask === "IN PROGRESS") {
        state.columns[1].cards.push({
          id: uuidv4(),
          title: action.payload.nameTask,
          time: action.payload.time,
        });
      } else {
        state.columns[2].cards.push({
          id: uuidv4(),
          title: action.payload.nameTask,
          time: action.payload.time,
        });
      }
      localStorage.setItem("listItems", JSON.stringify({ ...state }));

      return { ...state };

    case "DELETE_TASK":
      state.columns[0].cards = state.columns[0].cards.filter(
        (item) => item.id !== action.payload.id
      );

      state.columns[1].cards = state.columns[1].cards.filter(
        (item) => item.id !== action.payload.id
      );

      state.columns[2].cards = state.columns[2].cards.filter(
        (item) => item.id !== action.payload.id
      );

      localStorage.setItem("listItems", JSON.stringify({ ...state }));

      return { ...state };

    case "UPDATE_TASK":
      state.columns[0].cards = state.columns[0].cards.map((item) => {
        if (item.id === action.payload.id) {
          item = {
            id: uuidv4(),
            ...action.payload,
          };

          return item;
        } else {
          return item;
        }
      });
      state.columns[1].cards = state.columns[1].cards.map((item) => {
        if (item.id === action.payload.id) {
          item = {
            id: uuidv4(),
            ...action.payload,
          };

          return item;
        } else {
          return item;
        }
      });
      state.columns[2].cards = state.columns[2].cards.map((item) => {
        if (item.id === action.payload.id) {
          item = {
            id: uuidv4(),
            ...action.payload,
          };

          return item;
        } else {
          return item;
        }
      });

      localStorage.setItem("listItems", JSON.stringify({ ...state }));
      return { ...state };

    default:
      return { ...state };
  }
};
