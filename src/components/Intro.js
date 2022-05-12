function Intro({ situation }) {
  if (situation == 0) {
    return (
      <div className="intro">
        <h2>We're doing our best to unlock this safe</h2>
        <h3>
          We gotta guess the correct number before it sets the
          <span className="alarm-warning"> Alarm</span>
        </h3>
      </div>
    );
  } else if (situation == 1) {
    return (
      <div className="intro">
        <h2>Congratulations</h2>
        <h3>
          You are now <span className="money-lightup">$1,000,000</span> richer!
        </h3>
      </div>
    );
  } else if (situation == 2) {
    return (
      <div className="intro">
        <h2>This is so sad</h2>
        <h3>Welcome to prison, you should've been a better thief</h3>
        <img className="prison-img" src="./prison.jpg" alt="your place"></img>
      </div>
    );
  }
}

export default Intro;
