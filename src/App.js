import styled from "styled-components";
import TodoBoard from "./components/TodoBoard";
import { useEffect, useState } from "react";
import { applyDrag } from "./utilities/dragDrop";
import { useSelector } from "react-redux";
import FilterTask from "./components/FilterTask";
import { initData } from "./mockData/initData";

const Wrapper = styled.div`
  margin: 30px 40px;
  padding: 0 50px;
`;

const Title = styled.div`
  text-align: center;
  font-size: 25px;
  text-align: center;
  margin-bottom: 24px;
  font-weight: 700;
  color: #5680f9;
`;

const ManageBoard = styled.div`
  display: flex;
  justify-content: space-between;
`;

function App() {
  const data = useSelector((state) => state.todoItems);

  const [columns, setColumns] = useState([]);

  const onDrop = (dropResult, columnId) => {
    if (dropResult.removedIndex !== null || dropResult.addedIndex !== null) {
      let newColumns = [...columns];
      let currentColumn = newColumns.find((column) => column.id === columnId);
      currentColumn.cards = applyDrag(currentColumn.cards, dropResult);
      setColumns(newColumns);
    }
    localStorage.setItem(
      "listItems",
      JSON.stringify({ id: "board-1", columns })
    );
  };

  useEffect(() => {
    setColumns(data.columns);
  }, [data.columns]);

  return (
    <div className="App">
      <Wrapper>
        <Title>TO DO LIST</Title>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <FilterTask setColumns={setColumns} />
        </div>

        <ManageBoard>
          {columns?.map((data, index) => (
            <TodoBoard data={data} key={data.id} onDrop={onDrop} />
          ))}
        </ManageBoard>
      </Wrapper>
    </div>
  );
}

export default App;
