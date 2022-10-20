import { useCallback, useEffect, useRef, useState } from "react";
import {
  Container,
  GameBoard,
  Scoreboard,
  Tiles,
  Wrapper,
  Title,
  Score,
  ScoreCol
} from "./styles";

export function Board({
  score,
  isComplete = false,
  setIsComplete
}){
  const [turn, setTurn] = useState(0);
  const [data, setData] = useState([
    '','','',
    '','','',
    '','','',
  ])
  const boardRef = useRef(null);

  const handleDraw = useCallback((e, index) => {
    if(data[index - 1] === '' && !isComplete){
      const current = turn === 0 ? '⭕' : '❌';
      data[index -1] = current;

      e.target.innerText = current;
      setTurn(turn === 0 ? 1 : 0);
    }
  },[data, isComplete, turn])

  const checkRow = useCallback(() => {
    let isOver = false;
    for(let i = 0; i < 9; i+=3){
      isOver |= ((data[i] === data[i+1]) && (data[i] === data[i+2]) && data[i] !== '');
    }
    return isOver
  }, [data]);

  const checkCol = useCallback(() => {
    let isOver = false;
    for(let i = 0; i < 3; i++){
      isOver |= ((data[i] === data[i+3]) && (data[i] === data[i+6]) && data[i] !== '');
    }
    return isOver
  }, [data])

  const checkDiagonal = useCallback(() => {
    return(
      (data[0] === data[4] && data[0] === data[8] && data[0] !== '')
      || (data[2] === data[4] && data[2] === data[6] && data[2] !== '')
    ) 
  }, [data])

  const checkWin = useCallback(() => {
    return(
      checkRow() || checkCol() || checkDiagonal()
    )
  }, [checkCol, checkRow, checkDiagonal])

  const checkTie = useCallback(() => {
    let count = 0;
    data.forEach(cell => {
      if(cell !== ''){
        count++;
      }
    })

    return count === 9;
  }, [data])

  useEffect(() => {
    setData(['','','','','','','','','']);
    const cells = boardRef.current.children;
    for(let i = 0; i < 9; i++){
      cells[i].innerText = '';
    }
    setTurn(0);
    setIsComplete(false)
  }, [isComplete, setIsComplete])

  useEffect(() => {
    const index = turn === 0 ? 2 : 0;
    if(checkWin()){
      score[index] += 1;
      setIsComplete(true);
    } else if(checkTie()){
      score[1] += 1;
      setIsComplete(true);
    }
  }, [checkWin, checkTie, turn, score, setIsComplete])

  return(
    <Container>
      <Wrapper>
        <GameBoard ref={boardRef}>
          <Tiles onClick={(e) => handleDraw(e, 1)} />
          <Tiles onClick={(e) => handleDraw(e, 2)} $left $right />
          <Tiles onClick={(e) => handleDraw(e, 3)} />
          <Tiles onClick={(e) => handleDraw(e, 4)} $top $bottom />
          <Tiles onClick={(e) => handleDraw(e, 5)} $all />
          <Tiles onClick={(e) => handleDraw(e, 6)} $top $bottom />
          <Tiles onClick={(e) => handleDraw(e, 7)} />
          <Tiles onClick={(e) => handleDraw(e, 8)} $left $right />
          <Tiles onClick={(e) => handleDraw(e, 9)} />
        </GameBoard>
        <Scoreboard>
          <ScoreCol>
            <Title>Player 1 (⭕)</Title>
            <Score>{score[0] || 0}</Score>
          </ScoreCol>
          <ScoreCol>
            <Title>Tie</Title>
            <Score>{score[1] || 0}</Score>
          </ScoreCol>
          <ScoreCol>
            <Title>Player 2 (❌)</Title>
            <Score>{score[2] || 0}</Score>
          </ScoreCol>
        </Scoreboard>
      </Wrapper>
    </Container>
  );
}