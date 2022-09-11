import React, { useCallback, useState } from "react";
import styled from "styled-components";
import Paper from "@mui/material/Paper";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import SaveAsOutlinedIcon from "@mui/icons-material/SaveAsOutlined";
import NotInterestedOutlinedIcon from "@mui/icons-material/NotInterestedOutlined";
import DoneOutlinedIcon from "@mui/icons-material/DoneOutlined";
import { useDispatch } from "react-redux";
import { updateTask } from "../redux/actions/listActions";
import { getCurrentTime } from "../utilities/getCurrentTime";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Container = styled(Paper)`
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
  font-weight: 600;
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
  z-index: 2;
`;

const GroupIconUpDate = styled.div`
  z-index: 2;
  display: flex;
  gap: 4px;
  & > :nth-child(1) {
    color: green;
  }

  & > :nth-child(2) {
    opacity: 0.8;
  }

  & > svg {
    font-size: 20px;
  }
`;

const Overlay = styled.div`
  position: fixed;
  background-color: rgba(247, 248, 254, 0.5);
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 1;
`;

export const TaskToDo = ({ data, onDelete }) => {
  const dispatch = useDispatch();

  const [isOpenUpdate, setIsOpenUpdate] = useState(false);
  const [inputUpdate, setInputUpdate] = useState(data.title);

  const notify = useCallback(
    (message) => {
      toast.success(message);
    },
    [dispatch]
  );

  const handleUpdate = () => {
    if (inputUpdate !== data.title) {
      dispatch(
        updateTask({
          title: inputUpdate,
          id: data.id,
          time: getCurrentTime(),
        })
      );
      notify("Update Task Success");
    }
    setIsOpenUpdate(false);
  };

  const changeInputUpdate = (e) => {
    setInputUpdate(e.target.value);
  };

  return (
    <Container elevation={3}>
      {!isOpenUpdate ? (
        <>
          <TimeTask>
            <CalendarMonthOutlinedIcon />
            <span>{data.time}</span>
          </TimeTask>
          <Detailtask>
            <span>{data.title}</span>
            <SettingTask>
              <SaveAsOutlinedIcon onClick={() => setIsOpenUpdate(true)} />
              <DeleteForeverOutlinedIcon onClick={() => onDelete(data)} />
            </SettingTask>
          </Detailtask>
        </>
      ) : (
        <>
          <Update>
            <InputUpdate value={inputUpdate} onChange={changeInputUpdate} />
            <GroupIconUpDate>
              <DoneOutlinedIcon
                onClick={handleUpdate}
                sx={{ fontWeight: 700 }}
              />
              <NotInterestedOutlinedIcon
                onClick={() => setIsOpenUpdate(false)}
                sx={{ fontWeight: 700 }}
              />
            </GroupIconUpDate>
            <Overlay></Overlay>
          </Update>
        </>
      )}

      <ToastContainer />
    </Container>
  );
};
