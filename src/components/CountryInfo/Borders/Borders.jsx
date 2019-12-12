import React from 'react'
import classes from './Borders.module.css'

const Borders = ({borders}) => {
  return (
    <div>
      <h3>Borders</h3>
      <ul className={classes.Borders}>
        {borders.map((border,index) => <li key={index}>{border}</li>)}
      </ul>
    </div>
  )
}

export default Borders
