function Keepers({ situation, attempts }) {
  if (situation === 0 && attempts !== 5) {
    return (
      <div className="keepers">
        <span className="attempts-span">{attempts}</span> Attempts left
      </div>
    );
  } else {
    return <></>;
  }
}

export default Keepers;
