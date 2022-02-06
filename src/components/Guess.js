import React from "react";

function Guess() {
  const [guess, setGuess] = React.useState("");
  const [allGuess, setAllGuess] = React.useState([]);

  const addGuess = () => {
    let founded = allGuess.find((el) => el === guess);
    if (founded) {
      console.log(founded, "---founded");
      alert(`${founded} already exists`);
    } else {
      setAllGuess([...allGuess, guess]);
    }
    setGuess(""); // clean input
  };

  return (
    <div>
      <input
        onChange={(e) => setGuess(e.target.value)}
        type="text"
        placeholder="give a name"
        value={guess}
      />
      <button onClick={addGuess}>Add Guess</button>
      {allGuess.map((e, i) => (
        <div key={i}>{e}</div>
      ))}
    </div>
  );
}

export default Guess;

//Presents

// Add present
//Check exist
