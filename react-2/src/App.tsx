import React, { Component, Fragment } from "react";
import SelectCity from "./SelectCity/SelectCity";
import City from "./City/City";
import { render } from "react-dom";
const data: { [key: string]: any } = require("./data/data.json");

interface iProps {
  initialValue?: number;
}
interface IState {
  count: number;
  date: any;
  selectedCity: number;
  favoriteCity: number[];
  Cities: any[];
}

interface cityElement {
  favorite?: boolean;
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

export default class App extends Component<iProps, IState> {
  constructor(props: iProps) {
    super(props);

    this.state = {
      count: props.initialValue ? props.initialValue : 0,
      date: new Date(),
      favoriteCity: [],
      selectedCity: null,
      Cities: data.features.map((el: any, index: number) => {
        return { ...el.properties, index };
      }),
    };
  }

  changeSelected = (id: number) => {
    this.setState({
      selectedCity: id,
    });
  };

  checkFavorite = (id: number): boolean => {
    return !!this.state.favoriteCity.find((city) => id == city);
  };

  addFavorite = (id: number) => {
    if (!this.checkFavorite(id)) {
      this.setState({
        favoriteCity: [...this.state.favoriteCity, id],
      });
    }
  };

  removeFavorite = (id: number) => {
    this.setState({
      favoriteCity: this.state.favoriteCity.filter((city) => {
        return id != city;
      }),
    });
    return true;
  };

  getCities = () => {
    return this.state.Cities;
  };

  getCityProps = (id: number) => {
    return this.state.Cities.find((el) => {
      return id == el.index;
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="App">
              <SelectCity
                changeSelected={this.changeSelected}
                getCities={this.getCities}
              />
            </div>
          </div>
        </div>
        <div className="row mt-3">
          {this.state.selectedCity != null && (
            <City
              addFavorite={this.addFavorite}
              removeFavorite={this.removeFavorite}
              favorite={this.checkFavorite(this.state.selectedCity)}
              {...this.getCityProps(this.state.selectedCity)}
            ></City>
          )}
        </div>

        {this.state.favoriteCity.length > 0 && (
          <Fragment>
            <div className="row mt-3">
              <h5>Favorite</h5>
            </div>
            <div className="row mt-2">
              {this.state.favoriteCity.map((el, index) => {
                return (
                  <City
                    addFavorite={this.addFavorite}
                    removeFavorite={this.removeFavorite}
                    favorite={true}
                    {...this.getCityProps(el)}
                    key={index}
                  />
                );
              })}
            </div>
          </Fragment>
        )}
      </div>
    );
  }
}
