import styled from "styled-components";

export const Container = styled.div`
  background: #594545;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const Wrapper = styled.div`
  width: 640px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const GameBoard = styled.div`
  width: 600px;
  height: 600px;
  display: flex;
  flex-wrap: wrap;
`

export const Tiles = styled.div`
  width: 200px;
  height: 200px;
  box-sizing: border-box;
  border: ${({ $all }) => $all ? '5px solid #FFF8EA' : ''};
  border-left: ${({ $left }) => $left ? '5px solid #FFF8EA' : ''};
  border-right: ${({ $right }) => $right ? '5px solid #FFF8EA' : ''};
  border-top: ${({ $top }) => $top ? '5px solid #FFF8EA' : ''};
  border-bottom: ${({ $bottom }) => $bottom ? '5px solid #FFF8EA' : ''};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 8rem
`

export const Scoreboard = styled.div`
  width: 480px;
  padding: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Title = styled.h2`
  margin: 0px;
  color: #FFF8EA;;
`

export const Score = styled.p`
  margin: 0px;
  color: #FFF8EA;
  font-size: 48px;
  font-weight: 600;
`

export const ScoreCol = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 8px
`