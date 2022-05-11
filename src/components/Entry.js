const secretNumber = Math.floor(Math.random() * 10000);

const guess = (theGuess) => {
  if (theGuess === secretNumber) {
    alert(`Correct`);
  } else {
    alert(`${theGuess} is not equal to ${secretNumber}`);
  }
};
const Entry = () => {
  return (
    <div className="entry">
      <input
        id="guess"
        type="number"
        className="guess-field"
        placeholder="0000-9999"
      ></input>
      <button
        className="unlock-button"
        onClick={() => guess(document.getElementById("guess").value)}
      >
        Unlock
      </button>
    </div>
  );
};

export default Entry;
