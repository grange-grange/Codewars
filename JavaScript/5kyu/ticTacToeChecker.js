/*If we were to set up a Tic-Tac-Toe game, we would want to know whether the board's current state is solved, wouldn't we? Our goal is to create a function that will check that for us!

Assume that the board comes in the form of a 3x3 array, where the value is 0 if a spot is empty, 1 if it is an "X", or 2 if it is an "O", like so:

[[0, 0, 1],
 [0, 1, 2],
 [2, 1, 0]]
We want our function to return:

-1 if the board is not yet finished AND no one has won yet (there are empty spots),
1 if "X" won,
2 if "O" won,
0 if it's a cat's game (i.e. a draw).
You may assume that the board passed in is valid in the context of a game of Tic-Tac-Toe.*/

//#1

function isSolved(board) {
    //создаем массив возможных комбинаций
  let options = [...board];
  for (let i = 0; i < 3; i++) {
    options.push([board[0][i], board[1][i], board[2][i]]);
  }
  options.push([board[0][0], board[1][1], board[2][2]], [board[0][2], board[1][1], board[2][0]]);
    //проверка на победу  
  for (i = 0; i < options.length; i++) {
    options[i] = options[i].join('');
    if (/111/.test(options[i])) {
      return 1;
    } else if (/222/.test(options[i])) {
      return 2;
    }
  }
    //проверка на незавершенность игры
  if (!/0/.test(options.join(''))) {
    return 0;
  } else {
    return -1;
  }
}

//#2

function isSolved(board) {
  let str = board.join('').replace(/,/g,'');
  if (/^111|...111...|111$|1..1..1|1...1...1/.test(str)) {
    return 1;
  } else if (/^222|...222...|222$|2..2..2|2...2...2/.test(str)) {
    return 2;
  } else if (/0/.test(str)) {
    return -1;
  } else {
    return 0;
  }  
}