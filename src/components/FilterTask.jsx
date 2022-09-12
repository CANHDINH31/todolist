import React, { useState } from "react";
import styled from "styled-components";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Icon from "../assets/icon_hotel.png";
import { useDispatch, useSelector } from "react-redux";
import { restoreTask, searchTask } from "../redux/actions/listActions";
import { initData } from "../mockData/initData";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { formatDate } from "../utilities/getCurrentTime";

const Container = styled(Paper)`
  padding: 15px 15px;
  width: fit-content;
  margin-bottom: 40px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  justify-content: center;

  & > svg {
    color: green;
    font-size: 48px;
  }
  & > span {
    font-size: 24px;
    color: #15284a;
    font-weight: 600;
  }
`;

const PropertyList = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 20px;
`;

const PropertyItem = styled.div`
  position: relative;
`;

const Label = styled.div`
  color: #15284a;
  font-size: 16px;
  font-weight: 500;
`;

const Input = styled.input`
  margin-top: 10px;
  height: 30px;
  background-color: #f0f2f5;
  outline: 0;
  border: 0px;
  padding-left: 10px;
  box-shadow: none;
  font-size: 14px;
  font-weight: 500;
  color: #191919;
  border: 1px solid #cad2de;
  text-align: left;
  border-radius: 5px;
`;

const DateWrapper = styled(DatePicker)`
  outline: none;
  border: none;
  margin-top: 10px;
  height: 30px;
  background-color: #f0f2f5;
  padding-left: 10px;
  box-shadow: none;
  font-size: 14px;
  font-weight: 500;
  color: #191919;
  border: 1px solid #cad2de;
  text-align: left;
  border-radius: 5px;
`;

const FilterTask = () => {
  const dispatch = useDispatch();
  const data = localStorage.getItem("listItems")
    ? JSON.parse(localStorage.getItem("listItems")).columns
    : initData.columns;

  const [nameTask, setNameTask] = useState("");
  const [startDate, setStartDate] = useState(new Date());

  const handleSearch = () => {
    const date = startDate ? formatDate(startDate) : "";
    let newData = [
      { id: "column-1", title: "TO DO" },
      { id: "column-2", title: "IN PROGRESS" },
      { id: "column-3", title: "DONE" },
    ];
    newData[0].cards = data[0].cards.filter((item) => {
      return (
        item.title.toLowerCase().includes(nameTask.toLowerCase()) &&
        item.time.toLowerCase().includes(date)
      );
    });
    newData[1].cards = data[1].cards.filter((item) => {
      return (
        item.title.toLowerCase().includes(nameTask.toLowerCase()) &&
        item.time.toLowerCase().includes(date)
      );
    });
    newData[2].cards = data[2].cards.filter((item) => {
      return (
        item.title.toLowerCase().includes(nameTask.toLowerCase()) &&
        item.time.toLowerCase().includes(date)
      );
    });
    dispatch(searchTask(newData));
  };

  const handleGetAllTask = () => {
    dispatch(restoreTask());
  };

  return (
    <Container elevation={3}>
      <Header>
        <img src={Icon} />
        <span>Filter Tasks </span>
      </Header>
      <PropertyList>
        <PropertyItem>
          <Label>Name Task</Label>
          <Input
            placeholder="Search your task ......"
            value={nameTask}
            onChange={(e) => setNameTask(e.target.value)}
          />
        </PropertyItem>
        <PropertyItem>
          <Label>Celender</Label>
          <DateWrapper
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            style={{ border: "none" }}
          />
        </PropertyItem>
        <PropertyItem
          style={{ display: "flex", alignItems: "flex-end", gap: "10px" }}
        >
          <Button variant="contained" onClick={handleSearch}>
            Search
          </Button>
          <Button variant="contained" onClick={handleGetAllTask} color="error">
            Get All Task
          </Button>
        </PropertyItem>
      </PropertyList>
    </Container>
  );
};

export default FilterTask;
