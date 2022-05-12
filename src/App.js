import "./App.css";
import Intro from "./components/Intro";
import Entry from "./components/Entry";
import Helps from "./components/Helps";
import Keepers from "./components/Keepers";
import { useState } from "react";

const secretNumber = Math.floor(Math.random() * 10000);

function App() {
  const [situation, setSituation] = useState(0); // 0 playing, 1 won, 2 lose
  const [attempts, setAttempts] = useState(5);
  const [helpy, setHelpy] = useState(0);
  return (
    <div className="container">
      <Intro situation={situation} />
      <Entry
        secretNumber={secretNumber}
        situation={situation}
        setSituation={setSituation}
        attempts={attempts}
        setAttempts={setAttempts}
        setHelpy={setHelpy}
      />
      <Helps
        situation={situation}
        setSituation={setSituation}
        helpy={helpy}
        setHelpy={setHelpy}
        secretNumber={secretNumber}
        attempts={attempts}
      />
      <Keepers situation={situation} attempts={attempts} />
      <p className="hide">{secretNumber}</p>
    </div>
  );
}

export default App;
