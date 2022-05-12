import OneHack from "./OneHack";
function Hacks({ helpy, secretNumber }) {
  const randomHacks = (secretNumber) => {
    let hacksArray = [];

    for (let i = 0; i < 5; i++) {
      hacksArray.push(Math.floor(Math.random() * 10000));
    }
    let hacksDivs = hacksArray.map((number) => <OneHack number={number} />);
    return hacksDivs;
  };
  if (helpy === 0) {
    return <></>;
  } else {
    return <div className="hacks-nums">{randomHacks(secretNumber)}</div>;
  }
}
export default Hacks;
