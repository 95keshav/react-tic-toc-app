const Square = ({ index, onBoxClicked, value }) => {
  const combinedClasses = `btn ${value ? "clicked" : ""}`;
  return (
    <button
      key={index}
      className={combinedClasses}
      onClick={onBoxClicked}
      disabled={value !== null ? true : false}
    >
      {value}
    </button>
  );
};

const GameBoard = ({ boxClicked, pattern }) => {
  return (
    <div className="game">
      {pattern.map((box, index) => (
        <Square
          key={index}
          index={index}
          onBoxClicked={() => boxClicked(index)}
          value={box.value}
        />
      ))}
    </div>
  );
};

export default GameBoard;
