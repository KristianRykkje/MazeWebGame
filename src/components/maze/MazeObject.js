import React from "react";
import styled from "@emotion/styled";

export const MazeSquare = styled.div`
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  border-top: ${(p) => (p.borders[0] && !p.entrance ? "1px solid black" : "")};
  border-right: ${(p) => (p.borders[1] ? "1px solid black" : "")};
  border-bottom: ${(p) => (p.borders[2] && !p.exit ? "1px solid black" : "")};
  border-left: ${(p) => (p.borders[3] ? "1px solid black" : "")};
`;

const N = [1, 3, 5, 7, 9, 11, 13, 15];
const S = [2, 3, 6, 7, 10, 11, 14, 15];
const E = [4, 5, 6, 7, 12, 13, 14, 15];
const W = [8, 9, 10, 11, 12, 13, 14, 15];

// const N = 1;
// const S = 2;
// const E = 4;
// const W = 8;

const findBorder = (num) => {
  let borderTop = true;
  let borderBottom = true;
  let borderRight = true;
  let borderLeft = true;

  if (N.includes(num)) borderTop = false;
  if (S.includes(num)) borderBottom = false;
  if (E.includes(num)) borderRight = false;
  if (W.includes(num)) borderLeft = false;

  return [borderTop, borderRight, borderBottom, borderLeft];
};

function MazeObject({ num, entrance, exit }) {
  const borders = findBorder(num);

  return <MazeSquare borders={borders} entrance={entrance} exit={exit} />;
}

export default MazeObject;
