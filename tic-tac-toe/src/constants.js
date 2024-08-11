export const PLAYER = {
  ONE: '🦁',
  TWO: '🐻',
};

export const INITIAL_SQUARES = Array(9).fill(null);

const WINNER_CONDITIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export const WINNERS_COLOR = '#fff047';

export const checkWinner = (squares) => {
  let winnerInfo = null;
  for (let [x, y, z] of WINNER_CONDITIONS) {
    let winner = squares[x];

    if (winner && winner === squares[y] && winner === squares[z]) {
      console.log('게임끝났다');
      winnerInfo = {
        winner,
        condition: [x, y, z],
      };

      break;
    }
  }
  return winnerInfo;
};
