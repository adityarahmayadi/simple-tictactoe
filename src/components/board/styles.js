import styled from "styled-components";

export const Container = styled.div`
  background: #594545;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media (min-width: 768px){
    width: 640px;
  }
`

export const GameBoard = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  @media (min-width: 768px){
    width: 600px;
    height: 600px;
  }
`

export const Tiles = styled.div`
  width: 33%;
  aspect-ratio : 1 / 1;
  box-sizing: border-box;
  border: ${({ $all }) => $all ? '5px solid #FFF8EA' : ''};
  border-left: ${({ $left }) => $left ? '5px solid #FFF8EA' : ''};
  border-right: ${({ $right }) => $right ? '5px solid #FFF8EA' : ''};
  border-top: ${({ $top }) => $top ? '5px solid #FFF8EA' : ''};
  border-bottom: ${({ $bottom }) => $bottom ? '5px solid #FFF8EA' : ''};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 5rem;
  @media (min-width: 768px){
    width: 200px;
    font-size: 8rem;
  }
`

export const Scoreboard = styled.div`
  width: 100%;
  padding: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  @media (min-width: 768px){
    width: 480px;
    justify-content: space-between;
    gap: 0px;
  }
`

export const Title = styled.h2`
  margin: 0px;
  color: #FFF8EA;
  font-size: 16px;
  @media (min-width: 768px){
    font-size: 32px;
  }
`

export const Score = styled.p`
  margin: 0px;
  color: #FFF8EA;
  font-size: 28px;
  font-weight: 600;
  @media (min-width: 768px){
    font-size: 32px;
  }
`

export const ScoreCol = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 8px;
`

export const Reset = styled.div`
  margin-top: 16px;
  padding: 16px;
  border-radius: 8px;
  text-align: center;
  border: 1px solid #FFF8EA;
  color: #FFF8EA;
  font-weight: bold;
  cursor: pointer;
  :hover {
    background: #FFF8EA;
    color: #594545;
  }
`