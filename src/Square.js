import React from 'react'

import classes from './Square.module.css'

function Square(props) {
  const {value} = props
  return (
    <button className={classes.Square} onClick={() => props.clicked()}>
      {value}
    </button>
  )
}

export default Square
