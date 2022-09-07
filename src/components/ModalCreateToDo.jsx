import React, { useState } from "react";
import styled from "styled-components";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/actions/listActions";
import { getCurrentTime } from "../utilities/getCurrentTime";

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(33, 33, 33, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99;
`;

const Wrapper = styled.div`
  background-color: #fff;
  width: 350px;
  background-color: #fff;
  padding: 10px 15px;
  border-radius: 5px;
`;

const Title = styled.div`
  font-weight: 700;
  letter-spacing: 0.5px;
  line-height: 30px;
  box-sizing: border-box;
  border-bottom: 1px solid #ccc;
  color: #5680f9;
`;

const Input = styled.input`
  line-height: 30px;
  width: 100%;
  border-radius: 3px;
  border: 1px solid #ccc;
  text-indent: 7px;
  margin-bottom: 25px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 20px;
`;

const ModalCreateToDo = ({ setisOpenModalCreateTodo, defaultSelect }) => {
  const [typeTask, setTypeTask] = useState(defaultSelect);
  const [nameTask, setNameTask] = useState("");

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setTypeTask(e.target.value);
  };

  const onCreateTask = () => {
    if (nameTask !== "") {
      dispatch(
        addTask({
          time: getCurrentTime(),
          typeTask,
          nameTask,
        })
      );
    } else {
    }

    setisOpenModalCreateTodo(false);
  };

  return (
    <Container>
      <Wrapper>
        <Title>CREATE NEW TASK</Title>
        <FormControl>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            value={typeTask}
            onChange={handleChange}
          >
            <FormControlLabel value="TO DO" control={<Radio />} label="TODO" />
            <FormControlLabel
              value="IN PROGRESS"
              control={<Radio />}
              label="IN PROGRESS"
            />
            <FormControlLabel value="DONE" control={<Radio />} label="DONE" />
          </RadioGroup>
        </FormControl>
        <Input
          placeholder="Enter your task ..."
          onChange={(e) => setNameTask(e.target.value)}
        />
        <ButtonGroup>
          <Button
            variant="contained"
            size="small"
            onClick={() => onCreateTask()}
          >
            Save
          </Button>
          <Button
            variant="outlined"
            size="small"
            onClick={() => setisOpenModalCreateTodo(false)}
          >
            Cancel
          </Button>
        </ButtonGroup>
      </Wrapper>
    </Container>
  );
};

export default ModalCreateToDo;
