import React from "react";
import styled from "@emotion/styled";

import { generateNewMaze } from "./mazeGenerator";

const ButtonContainer = styled.div`
  margin-top: 20px;
`;

function CreateNewMazeButton({ updateMaze, rowsAndColums }) {
  return (
    <ButtonContainer>
      <button onClick={() => updateMaze(generateNewMaze(rowsAndColums))}>Update The maze</button>
    </ButtonContainer>
  );
}

export default CreateNewMazeButton;
