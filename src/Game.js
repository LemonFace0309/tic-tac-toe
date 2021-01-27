import React, {useState} from 'react'

import Board from './Board'


function Game() {
  const [isXTurn, setIsXTurn] = useState(true)
  const [squares, setSquares] = useState(
    [" ", " ", " ", " ", " ", " ", " ", " ", " "]
  )

  const changeTurn = (num) => {
    const moveType = isXTurn ? "X" : "O"
    const newSquares = [...squares]
    console.log(newSquares)
    newSquares[num] = moveType
    setSquares(newSquares)
    setIsXTurn(!isXTurn);
  }

  return (
    <div>
      <div>
        <h1>{isXTurn ? "X's " : "O's "} Turn</h1>
      </div>
      <div className="board">
        <Board squares={squares} clicked={(num) => changeTurn(num)} />
      </div>
    </div>
  )
}

export default Game
