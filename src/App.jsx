import { useState } from "react";
import "./App.css";
import GameBoard from "./components/GameBoard";
import WinnerMsg from "./components/WinnerMsg";

const BoardList = [
  { value: null },
  { value: null },
  { value: null },
  { value: null },
  { value: null },
  { value: null },
  { value: null },
  { value: null },
  { value: null },
];
const winningPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

function msgStr(winner) {
  let msg = `CONGRATULATIONS ${winner} Wins`;
  msg = msg.split(" ");
  return msg;
}

function App() {
  const [board, setBoard] = useState(BoardList);
  const [isWinner, setIsWinner] = useState(false);
  const [winnerStr, setWinnerStr] = useState();
  const [turn, setTurn] = useState(true);

  //listen click event from boxes and and x/o on boxes when clicked
  function boxClicked(index) {
    if (turn === true) {
      board[index].value = "X";
      setTurn(false);
    } else {
      board[index].value = "0";
      setTurn(true);
    }
    checkWinner();
    setBoard([...board]);
  }

  function checkWinner() {
    // get winning string from winning postions
    for (let pattern of winningPattern) {
      // get text on each position
      let pos0 =
        board[pattern[0]].value !== null ? board[pattern[0]].value : "-";
      let pos1 =
        board[pattern[1]].value !== null ? board[pattern[1]].value : "-";
      let pos2 =
        board[pattern[2]].value !== null ? board[pattern[2]].value : "-";
      let winStr = pos0 + pos1 + pos2;
      // match each winning pattern string with wining string
      if (winStr === "XXX" || winStr === "000") {
        return showWinner(pos0);
      }
    }
  }

  function showWinner(winner) {
    setTimeout(() => {
      setWinnerStr(msgStr(winner));
      setIsWinner(true);
      resetBoxes();
    }, 600);
  }

  function resetBoxes() {
    setBoard([
      { value: null },
      { value: null },
      { value: null },
      { value: null },
      { value: null },
      { value: null },
      { value: null },
      { value: null },
      { value: null },
    ]);
    setTurn(true);
    hideWinner();
  }

  function hideWinner() {
    if (isWinner) setIsWinner(!isWinner);
  }

  return (
    <main>
      <WinnerMsg
        winnerState={isWinner}
        winnerStr={winnerStr}
        resetBoxes={resetBoxes}
      />
      <h1>Tic Tac Toe</h1>
      <div className="container">
        <GameBoard boxClicked={boxClicked} pattern={board} />
      </div>
      <button className="rst-btn" onClick={resetBoxes}>
        Reset Game
      </button>
    </main>
  );
}

export default App;
