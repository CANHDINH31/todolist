import React, { useState } from "react";
import styled from "styled-components";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { TaskToDo } from "./TaskToDo";
import ModalCreateToDo from "./ModalCreateToDo";
import { Container, Draggable } from "react-smooth-dnd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
  icon,
} from "@fortawesome/fontawesome-svg-core/import.macro";

import { useSelector } from "react-redux";

const Wrapper = styled.div`
  width: 320px;
  min-height: 376px;
  border: 1px solid #e1e4e8;
  border-radius: 5px;
  background-color: #f7f8fe;
  padding: 10px 20px;
  height: -webkit-fit-content;
  height: -moz-fit-content;
  height: fit-content;
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
  }
`;

const NameTask = styled.div`
  font-weight: 700;
  letter-spacing: 1px;
  font-size: 19px;
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
  & > span {
    line-height: 24px;
  }
`;

const ListTask = styled.div``;

const TodoBoard = ({ data, onDrop }) => {
  const [isOpenModalCreateTodo, setisOpenModalCreateTodo] = useState(false);

  return (
    <Wrapper>
      <HeaderBoard>
        <CountTask>
          <span> {data.cards.length} </span>
          <NameTask>{data.title}</NameTask>
        </CountTask>
        <CreateTask onClick={() => setisOpenModalCreateTodo(true)}>
          <AddOutlinedIcon />
          {/* <FontAwesomeIcon icon={icon({ name: "coffee", style: "solid" })} /> */}

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
          {data.cards.map((card, index) => (
            <Draggable key={card.id}>
              <TaskToDo data={card} />
            </Draggable>
          ))}
        </Container>
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
