import React, { Component, Fragment } from "react";
import { createGlobalStyle } from "styled-components";
//import * as React from "react";

import icons from "glyphicons";
import "./City.less";

interface IProps {
  addFavorite?(id: number): any;
  removeFavorite?(id: number): any;
  favorite?: boolean;
  index?: number;

  city?: string;
  country?: string;
  temp?: string;
  clouds?: number;
  humidity?: number;
  pressure?: number;
  feels_like?: string;
  wind_deg?: number;
  wind_speed?: string;
}
interface IState {
  favorite: boolean;
  index: number;
  name: string;
  temp: string;
  clouds: number;
  humidity: number;
  pressure: number;
  feels_like: string;
  wind_deg: number;
  wind_speed: string;
}

interface cityElement {
  index: number;
  name: string;
  temp: string;
  clouds: number;
  humidity: number;
  pressure: number;
  feels_like: string;
  wind_deg: number;
  wind_speed: string;
}

export default class City extends Component<IProps, IState> {
  constructor(props) {
    super(props);
    this.state = {
      favorite: this.props.favorite,
      clouds: this.props.clouds,
      feels_like: this.props.feels_like,
      humidity: this.props.humidity,
      index: this.props.index,
      name: this.props.city + " " + this.props.country,
      pressure: this.props.pressure,
      temp: this.props.temp,
      wind_deg: this.props.wind_deg,
      wind_speed: this.props.wind_speed,
    };
    
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.index != this.props.index ||
      prevState.favorite != this.props.favorite
    ) {
      this.setState({
        favorite: this.props.favorite,
        clouds: this.props.clouds,
        feels_like: this.props.feels_like,
        humidity: this.props.humidity,
        index: this.props.index,
        name: this.props.city + " " + this.props.country,
        pressure: this.props.pressure,
        temp: this.props.temp,
        wind_deg: this.props.wind_deg,
        wind_speed: this.props.wind_speed,
      });
    }
  }

  handleAddFavorite = () => {
    this.props.addFavorite(this.state.index);
  };
  handleRemoveFavorite = () => {
    this.props.removeFavorite(this.state.index);
  };

  render() {
    let {favorite,clouds, feels_like,humidity,index,name,pressure,temp,wind_deg,wind_speed}=this.state;
    return (
      <Fragment>
        <div className="card cityCard">
          <div className="card-body">
            <h3 className="card-title text-center ">
              <span className="favoriteFlag">
                {favorite ? icons.star : icons.starOpen}
              </span>
            </h3>
            <h5 className="card-title">{name}</h5>

            <p className="card-text">
              Temperature: {Number(temp).toFixed(0)}&deg;C
            </p>
            <p className="card-text">
              Feels like: {Number(feels_like).toFixed(0)}&deg;C
            </p>
            <p className="card-text">
              Clouds: &nbsp;
              {clouds < 25 ? (
                <img
                  src="/images/sun.png"
                  title={String(clouds)}
                  alt={String(clouds)}
                  className="cloudIcon"
                />
              ) : clouds < 50 ? (
                <img
                  src="/images/cloudy.png"
                  title={String(clouds)}
                  alt={String(clouds)}
                  className="cloudIcon"
                />
              ) : clouds < 75 ? (
                <img
                  src="/images/cloud.png"
                  title={String(clouds)}
                  alt={String(clouds)}
                  className="cloudIcon"
                />
              ) : (
                <img
                  src="/images/clouds.png"
                  title={String(clouds)}
                  alt={String(clouds)}
                  className="cloudIcon"
                />
              )}
            </p>
            <p className="card-text">Humidity: {humidity}%</p>
            <p className="card-text">Pressure: {pressure}</p>
            <p className="card-text">Wind degree: {wind_deg}&deg;</p>

            <p className="card-text">Wind speed: {wind_speed}</p>

            {favorite ? (
              <a
                href="#"
                onClick={this.handleRemoveFavorite}
                className="btn btn-primary align-self-center"
              >
                Remove from favorite
              </a>
            ) : (
              <a
                href="#"
                onClick={this.handleAddFavorite}
                className="btn btn-primary align-self-center"
              >
                Add to favorite
              </a>
            )}
          </div>
        </div>
      </Fragment>
    );
  }
}
