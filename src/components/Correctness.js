function Correctness({ secretNumber, attempts, lastGuess }) {
  const lastGuessCorrectness = (secretNumber, lastGuess) => {
    if (Math.abs(secretNumber - lastGuess) > 1000) {
      return "Very Far";
    }
    if (Math.abs(secretNumber - lastGuess) > 100) {
      return "Almost";
    }
    if (Math.abs(secretNumber - lastGuess) > 0) {
      return "Extremely Close";
    }
  };
  if (attempts === 5) {
    return <></>;
  } else {
    return (
      <p>
        That was Wrong{attempts} ..
        {lastGuessCorrectness(secretNumber, lastGuess)}
      </p>
    );
  }
}
export default Correctness;
