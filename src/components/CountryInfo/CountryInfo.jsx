import React, { Component, Fragment } from "react";
import classes from "./CountryInfo.module.css";
import Information from "./Information/Information";
import Flag from "./Flag/Flag";
import Borders from "./Borders/Borders";
import axios from "../../axios/axios";
import Preloader from "../Ui/Preloader/Preloader";
import Weather from "./Weather/Weather";

class CountryInfo extends Component {
  state = {
    country: {},
    borders: [],
    massWeather : [],
    showPreloader: false
  };

  async componentDidUpdate(prevProps) {
    if (this.props.name && this.props.name !== prevProps.name) {
      this.setState({ showPreloader: true });
      const response = await axios.get(`/name/${this.props.name}`);
      const country = { ...response.data[0] };
      let borders = [...response.data[0].borders];
      borders = borders.map(elem => axios.get(`/alpha/${elem}`));
      borders = await Promise.all(borders);
      borders = borders.map(elem => elem.data.name);
      this.showWeather(country.latlng[0],country.latlng[1]);
      this.setState({ country, borders, showPreloader: false});
    }
  }

  async showWeather(latitude,longitude) {
    const data = {
      headers : {
        'Authorization': 'a96ba7b0-1ca8-11ea-b746-0242ac130002-a96ba972-1ca8-11ea-b746-0242ac130002'
      }
    }

    const url = `https://api.stormglass.io/v1/weather/point?lat=${latitude}&lng=${longitude}&params=airTemperature`;

    const response = await axios.get(url,data);
    const massWeather = [];
    for (let index = 0; index < 24; index++) {
      if (index % 4 === 0){
        massWeather.push(response.data.hours[index])
      }
    }
    this.setState({massWeather})
  }

  render() {
    return (
      <div className={classes.CountryInfo}>
        {!Object.keys(this.state.country).length ? (
          <h1 style={{ textAlign: "center" }}>Select Country</h1>
        ) : this.state.showPreloader ? (
          <Preloader />
        ) : (
          <Fragment>
            <Information list={this.state.country} />
            <Flag flag={this.state.country.flag} />
            <Borders borders={this.state.borders} />
            <Weather weather={this.state.massWeather}/>
          </Fragment>
        )}
      </div>
    );
  }
}

export default CountryInfo;
