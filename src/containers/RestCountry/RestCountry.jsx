import React, { Component } from 'react'
import classes from './RestCountry.module.css'
import CountryList from '../../components/CountryList/CountryList'
import CountryInfo from '../../components/CountryInfo/CountryInfo'
import axios from '../../axios/axios'


export default class RestCountry extends Component {
  state = {
    listCountry : [],
    country : null
  }

  async componentDidMount(){
    const response = await axios.get('/all');
    const listCountry = []
    response.data.forEach(element => {
      listCountry.push(element.name);
    });
    this.setState({listCountry})
  }

  getCountryHandler =  index =>{
    this.setState({country : this.state.listCountry[index]})
  }


  render() {
    return (
      <div className={classes.RestCountry}>
        <CountryList list={this.state.listCountry} countryHandler={this.getCountryHandler}/>
        <CountryInfo name={this.state.country}/>
      </div>
    )
  }
}
