import { v4 as uuidv4 } from "uuid";
import { initData } from "../../mockData/initData";

const storage = JSON.parse(localStorage.getItem("listItems")) || initData;

export const listReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      if (action.payload.typeTask === "TO DO") {
        const todoTask = {
          id: uuidv4(),
          title: action.payload.nameTask,
          time: action.payload.time,
        };
        if (!storage.columns[0].cards.includes(todoTask)) {
          storage.columns[0].cards.push(todoTask);
        }
        if (!state.columns[0].cards.includes(todoTask)) {
          state.columns[0].cards.push(todoTask);
        }
      } else if (action.payload.typeTask === "IN PROGRESS") {
        const todoTask = {
          id: uuidv4(),
          title: action.payload.nameTask,
          time: action.payload.time,
        };
        if (!storage.columns[1].cards.includes(todoTask)) {
          storage.columns[1].cards.push(todoTask);
        }
        if (!state.columns[1].cards.includes(todoTask)) {
          state.columns[1].cards.push(todoTask);
        }
      } else {
        const todoTask = {
          id: uuidv4(),
          title: action.payload.nameTask,
          time: action.payload.time,
        };
        if (!storage.columns[2].cards.includes(todoTask)) {
          storage.columns[2].cards.push(todoTask);
        }
        if (!state.columns[2].cards.includes(todoTask)) {
          state.columns[2].cards.push(todoTask);
        }
      }

      localStorage.setItem("listItems", JSON.stringify(storage));

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

      storage.columns[0].cards = storage.columns[0].cards.filter(
        (item) => item.id !== action.payload.id
      );

      storage.columns[1].cards = storage.columns[1].cards.filter(
        (item) => item.id !== action.payload.id
      );

      storage.columns[2].cards = storage.columns[2].cards.filter(
        (item) => item.id !== action.payload.id
      );

      localStorage.setItem("listItems", JSON.stringify(storage));

      return { ...state };

    case "UPDATE_TASK":
      state.columns[0].cards = state.columns[0].cards.map((item) => {
        if (item.id === action.payload.id) {
          item = {
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
            ...action.payload,
          };

          return item;
        } else {
          return item;
        }
      });

      storage.columns[0].cards = storage.columns[0].cards.map((item) => {
        if (item.id === action.payload.id) {
          item = {
            ...action.payload,
          };

          return item;
        } else {
          return item;
        }
      });
      storage.columns[1].cards = storage.columns[1].cards.map((item) => {
        if (item.id === action.payload.id) {
          item = {
            ...action.payload,
          };

          return item;
        } else {
          return item;
        }
      });
      storage.columns[2].cards = storage.columns[2].cards.map((item) => {
        if (item.id === action.payload.id) {
          item = {
            ...action.payload,
          };

          return item;
        } else {
          return item;
        }
      });

      localStorage.setItem("listItems", JSON.stringify(storage));
      return { ...state };

    case "SEARCH_TASK":
      console.log(storage);
      return { ...state, columns: action.payload };

    case "RESTORE_TASK":
      state = localStorage.getItem("listItems")
        ? JSON.parse(localStorage.getItem("listItems"))
        : initData;

      return { ...state };

    default:
      return { ...state };
  }
};
