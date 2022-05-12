import { useState } from "react";
import Correctness from "./Correctness";
function Entry({
  secretNumber,
  situation,
  setSituation,
  setAttempts,
  attempts,
  setHelpy,
}) {
  const guess = (theGuess) => {
    if (theGuess >= 10000 || theGuess < 0) {
      alert("Enter a valid guess");
      return; // we are checking here if the guess is within correct requirements
    }
    setHelpy(0);
    if (theGuess == secretNumber) {
      //if the guess is correct you situation is set to 1 which translates to win
      alert(`Correct`);
      setSituation(1);
    } else {
      // if the guess is wrong, an attempt is consumed, it also hides the helps if its shown
      attemptUsed(attempts);
      setLastGuess(theGuess);
      if (attempts === 1) {
        setSituation(2);
      }
    }
  };

  const attemptUsed = (x) => {
    setAttempts(x - 1);
  };

  const [theGuess, setTheGuess] = useState(""); // this is for the input
  const [lastGuess, setLastGuess] = useState("");

  if (situation === 0) {
    // playing
    return (
      <div className="entry">
        <Correctness
          lastGuess={lastGuess}
          secretNumber={secretNumber}
          attempts={attempts}
        />
        <input
          id="guess"
          type="number"
          className="guess-field"
          placeholder="0000-9999"
          onChange={(event) => setTheGuess(event.target.value)}
        ></input>
        <button className="unlock-button" onClick={() => guess(theGuess)}>
          Unlock
        </button>
      </div>
    );
  } else {
    // won or lost
    return <></>;
  }
}

export default Entry;
