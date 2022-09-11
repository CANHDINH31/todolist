import { v4 as uuidv4 } from "uuid";

export const initData = {
  id: "board-1",
  columns: [
    {
      id: "column-1",
      title: "TO DO",
      cards: [
        {
          id: uuidv4(),
          title: "Default To Do 1",
          time: "16:41:02, 09/07/2022",
        },
        {
          id: uuidv4(),
          title: "Default To Do 2",
          time: "16:41:02, 09/07/2022",
        },
        {
          id: uuidv4(),
          title: "Default To Do 3",
          time: "16:41:02, 09/07/2022",
        },
        {
          id: uuidv4(),
          title: "Default To Do 4",
          time: "16:41:02, 09/07/2022",
        },
      ],
    },
    {
      id: "column-2",
      title: "IN PROGRESS",
      cards: [
        {
          id: uuidv4(),
          title: "Default In Progress 1",
          time: "16:41:15, 09/07/2022",
        },
        {
          id: uuidv4(),
          title: "Default In Progress 2",
          time: "16:41:15, 09/07/2022",
        },
        {
          id: uuidv4(),
          title: "Default In Progress 3",
          time: "16:41:15, 09/07/2022",
        },
      ],
    },
    {
      id: "column-3",
      title: "DONE",
      cards: [
        {
          id: uuidv4(),
          title: "Default Done 1",
          time: "16:41:38, 09/07/2022",
        },
        {
          id: uuidv4(),
          title: "Default Done 2",
          time: "16:41:38, 09/07/2022",
        },
      ],
    },
  ],
};
