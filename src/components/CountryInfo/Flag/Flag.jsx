import React from 'react'
import classes from './Flag.module.css'

const Flag = ({flag}) => {
  return (
    <div className={classes.Flag}>
      <img src={flag} alt="flag"/>
    </div>
  )
}

export default Flag
