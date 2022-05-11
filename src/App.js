import logo from "./logo.svg";
import "./App.css";
import Intro from "./components/Intro";
import Entry from "./components/Entry";
import Helps from "./components/Helps";

function App() {
  return (
    <div className="container">
      <Intro />
      <div className="wrong"></div>
      <Entry />
      <Helps />
      <div className="keepers">{} Attempts left</div>
    </div>
  );
}

export default App;
