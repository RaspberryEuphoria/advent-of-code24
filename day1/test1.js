function getColumns() {
  const file = require("fs").readFileSync("input.txt", "utf8");
  const lines = file.split("\n");

  const leftColumn = [];
  const rightColumn = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (!line) break;

    const [leftNumber, rightNumber] = line.match(/\d+/g);

    leftColumn.push(leftNumber);
    rightColumn.push(rightNumber);
  }

  return { leftColumn, rightColumn };
}

const { leftColumn, rightColumn } = getColumns();

const sortedLeftColumn = leftColumn.sort((a, b) => a - b);
const sortedRightColumn = rightColumn.sort((a, b) => a - b);

let totalDistance = 0;

for (let i = 0; i < sortedLeftColumn.length; i++) {
  totalDistance += Math.abs(sortedRightColumn[i] - sortedLeftColumn[i]);
}

console.log(totalDistance);
