import React, {useState} from 'react'

import Board from './Board'


function Game() {
  const [title, setTitle] = useState("X's Turn")
  const [isXTurn, setIsXTurn] = useState(true)
  const [squares, setSquares] = useState(
    [" ", " ", " ", 
    " ", " ", " ", 
    " ", " ", " "]
  )
  const [gameIsDone, setGameIsDone] = useState(false)

  const checkWinner = (board, symbol) => {
    const winConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]
    for (let i = 0; i < winConditions.length; i++) {
      const first = winConditions[i][0]
      const second = winConditions[i][1]
      const third = winConditions[i][2]
      if (board[first] === symbol && board[second] === symbol && board[third] === symbol) {
        setTitle(symbol + " is the winner!")
        setGameIsDone(true)
        return
      }
    }
  }
  
  const changeTurn = (num) => {
    if (gameIsDone) {
      return
    }
    const moveType = isXTurn ? "X" : "O"
    const newSquares = [...squares]
    console.log(newSquares)
    if (newSquares[num] !== " ") {
      setTitle("Square already chosen")
      return
    }
    newSquares[num] = moveType
    setSquares(newSquares)
    setIsXTurn(!isXTurn)
    setTitle(!isXTurn ? "X's Turn" : "O's Turn")
    checkWinner(newSquares, moveType)
  }

  return (
    <div>
      <div>
        <h1>{title}</h1>
      </div>
      <div className="board">
        <Board squares={squares} clicked={(num) => changeTurn(num)} />
      </div>
    </div>
  )
}

export default Game
