// matrix = [][]
// row = int
// col = int
// toFill = color (int)
// prevFill = color (int)
const floodFill = (matrix, row, col, toFill, prevFill) => {
  const rows = matrix.length;
  const cols = matrix[row].length;

  if (row < 0 || row >= rows || col < 0 || col >= cols) return;
  if (matrix[row][col] !== prevFill) return;

  floodFill(matrix, row - 1, col, toFill, prevFill);
  floodFill(matrix, row + 1, col, toFill, prevFill);
  floodFill(matrix, row, col - 1, toFill, prevFill);
  floodFill(matrix, row, col + 1, toFill, prevFill);
};
