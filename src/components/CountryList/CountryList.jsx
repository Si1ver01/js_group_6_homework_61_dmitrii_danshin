import React from 'react'
import classes from './CountryList.module.css'
import CountryItem from './CountryItem/CountryItem'

const CountryList = ({list , countryHandler}) => {
  return (
    <div className={classes.CountryList}>
      {list.map((elem,index) => <CountryItem key={index} name={elem} handler={() => countryHandler(index)}/>)}
    </div>
  )
}

export default CountryList
