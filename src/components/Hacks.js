import OneHack from "./OneHack";
function Hacks({ helpy, secretNumber, attempts }) {
  const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }
  const randomHacks = (secretNumber, attempts) => {
    let hacksArray = [];
    let options = 7;
    let minG = 0;
    let maxG = 10000;

    switch (attempts) {
      case 5:
        break;
      case 4:
        minG = secretNumber - 1000;
        maxG = secretNumber + 1000;
        options = 6;
        break;
      case 3:
        minG = secretNumber - 1000;
        maxG = secretNumber + 1000;
        options = 4;
        break;
      case 2:
        minG = secretNumber - 100;
        maxG = secretNumber + 100;
        options = 3;
        break;
      case 1:
        minG = secretNumber - 10;
        maxG = secretNumber + 10;
        options = 2;
        break;
    }

    for (let i = 0; i < options; i++) {
      if (i === 0) {
        hacksArray.push(secretNumber);
      }
      hacksArray.push(random(minG, maxG));
    }

    let hacksDivs = hacksArray
      .filter((number) => !(number >= 10000 || number <= 0))
      .map((number) => <OneHack number={number} />);
    return shuffle(hacksDivs);
  };
  if (helpy === 0) {
    return <></>;
  } else {
    return (
      <div className="hacks-nums">{randomHacks(secretNumber, attempts)}</div>
    );
  }
}
export default Hacks;
