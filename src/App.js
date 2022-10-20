import { useEffect, useState } from "react";
import { Board } from "./components/board";

function App() {
  const [score, ] = useState(JSON.parse(localStorage.getItem('ticscore')) || [0,0,0])
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if(localStorage.getItem("ticscore") === null){
      localStorage.setItem('ticscore', JSON.stringify([0,0,0]))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('ticscore', JSON.stringify(score))
  }, [isComplete, score])

  return (
    <Board
      score={score}
      isComplete={isComplete}
      setIsComplete={setIsComplete}
    />
  );
}

export default App;
