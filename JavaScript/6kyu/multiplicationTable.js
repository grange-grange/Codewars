/*Your task, is to create N×N multiplication table, of size provided in parameter.

For example, when given size is 3:

1 2 3
2 4 6
3 6 9
For the given example, the return value should be:

[[1,2,3],[2,4,6],[3,6,9]]*/

multiplicationTable = function(size) {
  let table = [];
  let num = 0;
  for (let i = 0; i < size; i++) {
    table.push([i + 1]);
    for (let j = 2; j <= size; j++) {
      table[i].push(table[i][0] * j);
    }
  }
  return table;
}
