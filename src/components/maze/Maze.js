import React, { useState } from "react";
import styled from "@emotion/styled";
import MazeObject from "./MazeObject";
import CreateNewMazeButton from "./CreateNewMazeButton";

const MazeContainer = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
`;

const MazeRows = styled.div`
  display: grid;
  grid-template-rows: repeat(${(p) => p.rows}, 30px);
`;

const MazeColumns = styled.div`
  display: grid;
  grid-template-columns: repeat(${(p) => p.columns}, 30px);
`;

const deafultMaze = [
  [4, 12, 12, 12, 12, 10, 2, 6, 12, 10],
  [6, 12, 8, 6, 10, 5, 11, 5, 10, 3],
  [7, 10, 6, 9, 5, 12, 9, 6, 9, 1],
  [3, 5, 9, 6, 14, 12, 10, 3, 6, 10],
  [5, 12, 10, 3, 5, 10, 3, 5, 9, 3],
  [6, 12, 9, 5, 10, 3, 5, 12, 12, 11],
  [3, 4, 14, 10, 1, 5, 10, 6, 12, 9],
  [7, 12, 9, 3, 6, 12, 9, 3, 6, 10],
  [3, 6, 12, 11, 5, 12, 10, 3, 1, 3],
  [1, 5, 8, 5, 12, 12, 9, 5, 12, 9],
];

function Maze() {
  const [maze, setMaze] = useState(deafultMaze);
  const [rowsAndColums, setRowsAndColums] = useState(10);
  const [forGrid, setForGrid] = useState(rowsAndColums);

  const updateMaze = (newMaze) => {
    setForGrid(rowsAndColums);
    setMaze(newMaze);
  };

  return (
    <div>
      <h2>Here we put the maze</h2>
      <label htmlFor="rows">Number of rows and columns:</label>
      <input type="number" id="rows" name="rows" min="3" max="20" value={rowsAndColums} onChange={(e) => setRowsAndColums(Number(e.target.value))} />

      <MazeContainer>
        <MazeRows rows={forGrid}>
          {maze.map((row, i) => {
            return (
              <MazeColumns columns={forGrid}>
                {row.map((element, j) => {
                  return <MazeObject num={element} entrance={i === 0 && j === Math.floor(rowsAndColums / 2)} exit={i === rowsAndColums - 1 && j === Math.floor(rowsAndColums / 2)} />;
                })}
              </MazeColumns>
            );
          })}
        </MazeRows>
      </MazeContainer>
      <CreateNewMazeButton updateMaze={updateMaze} rowsAndColums={rowsAndColums} />
    </div>
  );
}

export default Maze;
