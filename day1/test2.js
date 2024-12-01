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

let similarity = 0;

for (let i = 0; i < leftColumn.length; i++) {
  const currentValue = leftColumn[i];
  const occurences = rightColumn.filter((v) => v === currentValue).length;

  if (occurences === 0) continue;

  similarity += currentValue * occurences;
}

console.log(similarity);
