import { useState } from "react";
import Hacks from "./Hacks";
function Helps({ situation, setSituation, helpy, setHelpy, secretNumber }) {
  if (situation == 0) {
    // as the game continues
    return (
      <div className="helps">
        <div className="help-btns">
          <button className="surrender-btn" onClick={() => setSituation(2)}>
            Surrender
          </button>
          <button className="hack-btn" onClick={() => setHelpy(1)}>
            Hack
          </button>
        </div>
        <Hacks helpy={helpy} secretNumber={secretNumber} />
      </div>
    );
  } else {
    // if the game is won or lost ** other states
    return <></>;
  }
}

export default Helps;
