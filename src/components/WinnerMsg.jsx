// import { useState } from "react";

const WinnerMsg = ({ winnerState, winnerStr, resetBoxes }) => {
  // let [animeMsg, setAnimMsg] = useState(winnerStr);
  let anime = "";
  if (winnerStr !== undefined) {
    anime = winnerStr.map((str) => {
      return [...str].map((char, k) => {
        return `<span style="animation-delay:${k / 10}s;">${char}</span>`;
      });
    });
    anime = anime.reduce(
      (acc, prev) => acc + "&nbsp;&nbsp;" + prev + "&nbsp;&nbsp;"
    );
  }

  return (
    <div className={`container ${!winnerState ? "hide" : ""}`}>
      <p
        id="msg"
        dangerouslySetInnerHTML={{ __html: anime.replaceAll(",", "") }}
      ></p>
      <button className="rst-btn" onClick={resetBoxes}>
        New Game
      </button>
    </div>
  );
};
export default WinnerMsg;
