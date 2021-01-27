import React from 'react'
import Square from './Square'

function Board(props) {
  
  const renderSquare = (num) => {
    return <Square value={props.squares[num]} clicked={() => props.clicked(num)} />
  }

  return (
    <div>
      <div>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  )
}

export default Board
