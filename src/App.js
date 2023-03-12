import { useCallback, useEffect, useState } from "react";
import { Board } from "./components/board";

function App() {
  const [score, setScore] = useState(JSON.parse(localStorage.getItem('ticscore')) || [0,0,0])
  const [isComplete, setIsComplete] = useState(false);

  const handleReset = useCallback(() => {
    localStorage.setItem('ticscore', JSON.stringify([0,0,0]));
    setScore([0,0,0])
  }, [])

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
      onReset={handleReset}
    />
  );
}

export default App;
