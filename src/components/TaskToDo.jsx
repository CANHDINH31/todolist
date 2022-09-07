import React, { useState } from "react";
import styled from "styled-components";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";
import NotInterestedOutlinedIcon from "@mui/icons-material/NotInterestedOutlined";
import DoneOutlinedIcon from "@mui/icons-material/DoneOutlined";
import { useDispatch } from "react-redux";
import { deleteTask, updateTask } from "../redux/actions/listActions";
import { getCurrentTime } from "../utilities/getCurrentTime";
import { deleteSuccess } from "../redux/actions/messageActions";

const Container = styled.div`
  background-color: #fff;
  box-shadow: 0 3px 7px 0 rgb(110 142 247 / 13%);
  border: 1px solid #e1e2e8;
  border-radius: 3px;
  padding: 15px 10px;
  margin-bottom: 15px;
  cursor: pointer;
`;

const TimeTask = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  font-size: 13px;
  color: #666;
  margin-bottom: 10px;
`;

const Detailtask = styled.div`
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SettingTask = styled.div`
  & > svg {
    font-size: 20px;
    color: #ff2f2f;
    &:nth-child(1) {
      color: #5680f9;
    }
  }
`;

const Update = styled.div`
  display: flex;
  min-height: 40px;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`;

const InputUpdate = styled.input`
  flex: 1;
  padding: 2px 4px;
  font-size: 17px;
`;

const GroupIconUpDate = styled.div`
  display: flex;
  gap: 4px;
  & > :nth-child(1) {
    color: green;
  }

  & > :nth-child(2) {
    opacity: 0.8;
  }

  & > svg {
    font-size: 22px;

    font-weight: 700;
  }
`;

export const TaskToDo = ({ data }) => {
  const dispatch = useDispatch();

  const [isOpenUpdate, setIsOpenUpdate] = useState(false);
  const [inputUpdate, setInputUpdate] = useState(data.title);

  const handleDelete = async () => {
    if (window.confirm("Are you sure delete this task") === true) {
      try {
        dispatch(deleteTask(data));
      } catch (err) {}
    }
    // dispatch(deleteSuccess());
  };

  const handleUpdate = () => {
    if (inputUpdate !== data.title) {
      dispatch(
        updateTask({
          title: inputUpdate,
          id: data.id,
          time: getCurrentTime(),
        })
      );
    }
    setIsOpenUpdate(false);
  };

  const changeInputUpdate = (e) => {
    setInputUpdate(e.target.value);
  };

  return (
    <Container>
      {!isOpenUpdate ? (
        <>
          <TimeTask>
            <CalendarMonthOutlinedIcon />
            <span>{data.time}</span>
          </TimeTask>
          <Detailtask>
            <span>{data.title}</span>
            <SettingTask>
              <ModeEditOutlinedIcon onClick={() => setIsOpenUpdate(true)} />
              <DeleteOutlineOutlinedIcon onClick={handleDelete} />
            </SettingTask>
          </Detailtask>
        </>
      ) : (
        <>
          <Update>
            <InputUpdate value={inputUpdate} onChange={changeInputUpdate} />
            <GroupIconUpDate>
              <DoneOutlinedIcon onClick={handleUpdate} />
              <NotInterestedOutlinedIcon
                onClick={() => setIsOpenUpdate(false)}
              />
            </GroupIconUpDate>
          </Update>
        </>
      )}
    </Container>
  );
};
