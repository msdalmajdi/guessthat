const Entry = () => {
  return (
    <div className="entry">
      <input
        type="number"
        className="guess-field"
        placeholder="0000-9999"
      ></input>
      <button className="unlock-button">Unlock</button>
    </div>
  );
};

export default Entry;
