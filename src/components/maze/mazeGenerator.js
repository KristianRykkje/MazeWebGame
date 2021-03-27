function shuffle(o) {
  for (let j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
  return o;
}

export function generateNewMaze(rowsAndColums) {
  const width = rowsAndColums;
  const height = rowsAndColums;

  // initialize the grid
  const grid = [];
  const cells = [];
  // duplicate to avoid overriding
  let w = width;
  let h = height;

  while (w--) cells.push(0);
  while (h--) grid.push(new Array(width).fill(0));

  const N = 1;
  const S = 2;
  const E = 4;
  const W = 8;
  const dirs = ["N", "E", "S", "W"];
  const dirsValue = { N: N, E: E, S: S, W: W };
  const DX = { E: 1, W: -1, N: 0, S: 0 };
  const DY = { E: 0, W: 0, N: -1, S: 1 };
  const OPPOSITE = { E: W, W: E, N: S, S: N };

  function carve_passages_from(cx, cy, grid) {
    const directions = shuffle(dirs);

    directions.forEach((direction) => {
      let nx = cx + DX[direction];
      let ny = cy + DY[direction];

      if (ny >= 0 && ny <= grid.length - 1 && nx >= 0 && nx <= grid.length - 1 && grid[ny][nx] === 0) {
        grid[cy][cx] += dirsValue[direction];
        grid[ny][nx] += OPPOSITE[direction];
        carve_passages_from(nx, ny, grid);
      }
    });
  }

  carve_passages_from(0, 0, grid);

  return grid;
}
