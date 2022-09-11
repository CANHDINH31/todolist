import React, { useState, useEffect, useRef, useCallback } from "react";
import styled from "styled-components";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { TaskToDo } from "./TaskToDo";
import ModalCreateToDo from "./ModalCreateToDo";
import { Container, Draggable } from "react-smooth-dnd";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/actions/listActions";
import { getCurrentTime } from "../utilities/getCurrentTime";
import { ToastContainer, toast } from "react-toastify";
import { deleteTask } from "../redux/actions/listActions";
import Paper from "@mui/material/Paper";

const Wrapper = styled(Paper)`
  width: 320px;
  border: 1px solid #e1e4e8;
  border-radius: 5px;
  background-color: #f7f8fe;
  padding: 10px 20px;
  padding-bottom: 20px;
  max-height: 380px;
  overflow-y: scroll;
`;

const HeaderBoard = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
`;

const CountTask = styled.div`
  display: flex;
  align-items: center;

  & > span {
    line-height: 30px;
    width: 30px;
    background-color: #5680f9;
    border-radius: 100%;
    display: inline-block;
    text-align: center;
    margin-right: 7px;
    color: #fff;
    font-weight: 700;
  }
`;

const NameTask = styled.div`
  font-weight: 800;
  font-size: 20px;
  line-height: 30px;
`;

const CreateTask = styled.div`
  background-color: #5680f9;
  color: #fff;
  padding: 5px 7px;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-weight: 700;
  & > span {
    line-height: 24px;
  }
`;

const ListTask = styled.div``;

const TodoBoard = ({ data, onDrop }) => {
  const boardRef = useRef();
  const dispatch = useDispatch();

  const [isOpenModalCreateTodo, setisOpenModalCreateTodo] = useState(false);
  const [firstData, setFirstData] = useState(data);

  const notify = useCallback(
    (message) => {
      toast.success(message);
    },
    [dispatch]
  );

  const handleDelete = (data) => {
    if (window.confirm("Are you sure delete this task") === true) {
      dispatch(deleteTask(data));
      notify("Delete Task Success");
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (boardRef.current.scrollTop + 410 === boardRef.current.scrollHeight) {
        setTimeout(function () {
          dispatch(
            addTask({
              time: getCurrentTime(),
              typeTask: boardRef.current.id,
              nameTask:
                "CREATE AUTO " +
                boardRef.current.id +
                " " +
                Math.floor(Math.random() * 1000),
            })
          );
        }, 2000);
      }
    };

    boardRef.current.addEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setFirstData(data);
  }, [data]);
  return (
    <Wrapper ref={boardRef} id={data.title} elevation={3}>
      <HeaderBoard>
        <CountTask>
          <span> {data.cards.length} </span>
          <NameTask>{data.title}</NameTask>
        </CountTask>

        <CreateTask onClick={() => setisOpenModalCreateTodo(true)}>
          <AddOutlinedIcon />
          <span>New Task</span>
        </CreateTask>
      </HeaderBoard>

      <ListTask>
        <Container
          onDrop={(dropResult) => onDrop(dropResult, data.id)}
          getChildPayload={(index) => data.cards[index]}
          groupName="col"
          dropPlaceholder={{
            animationDuration: 150,
            showOnTop: true,
            className: "column-drop-preview",
          }}
        >
          {firstData.cards?.map((card, index) => (
            <Draggable key={card.id}>
              <TaskToDo data={card} onDelete={handleDelete} />
            </Draggable>
          ))}
        </Container>
        <ToastContainer />
      </ListTask>
      {isOpenModalCreateTodo && (
        <ModalCreateToDo
          setisOpenModalCreateTodo={setisOpenModalCreateTodo}
          defaultSelect={data.title}
        />
      )}
    </Wrapper>
  );
};

export default TodoBoard;
