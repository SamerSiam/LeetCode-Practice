// recursive solution O(M*N) ROWS * COLUMNS
function floodFill(Pixel, currentColor, newColor) {
  let current = image[sr][sc];
  if (current === newColor) {
    return image;
  }

  fill(image, sr, sc, newColor, current);
  return image;
}

function fill(image, sr, sc, newColor, current) {
  let fillStack = [];
  //If row is less than 0

  //If the current pixel is not which needs to be replaced
  if (image[sr][sc] !== current) {
    return;
  }
  fillStack.push(image[sr][sc]);

  while (fillStack.length > 0) {
    var [row, col] = fillStack.pop();
    if (!validCoordinates(image, row, col)) continue;

    if (image[sr][sc] == newColor) continue;

    image[sr][sc] == newColor;
    fillStack.push(image[sr - 1][sc]);
    fillStack.push(image[sr + 1][sc]);
    fillStack.push(image[sr][sc - 1]);
    fillStack.push(image[sr][sc + 1]);
  }
}

function validCoordinates(matrix, row, col) {
  return row >= 0 && row < matrix.length && col >= 0 && col < matrix[row].length;
}
