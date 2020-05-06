import React, { Component } from "react";
//import * as React from "react";

interface IProps {
  children?: { [key: string]: any };
  getCities(): { [key: string]: any };
  changeSelected: (arg: number) => any;
}
interface IState {
  Cities: { [key: string]: any };
  selected: number;
  value: any;
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

export default class SelectCity extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    //console.log(props);
    let Cities = this.props
      .getCities()
      .map(function (el: { [key: string]: any }, index: number) {
        return {
          index: index,
          name: el.city + ", " + el.country,
          temp: el.temp,
          clouds: el.clouds,
          humidity: el.humidity,
          pressure: el.pressure,
          feels_like: el.feels_like,
          wind_deg: el.wind_deg,
          wind_speed: el.wind_speed,
        };
      });

    this.state = {
      Cities,
      selected: null,
      value: "DEFAULT",
    };
  }

  handleChangeSelected = (event: any) => {
    this.setState({ value: event.target.value });
    let el = this.state.Cities.find((cityEl) => {
      return cityEl.index == event.target.value;
    });

    this.props.changeSelected(el.index);
  };

  render() {
    return (
      <div className="SelectComponent mt-2">
        <select
          className="form-control"
          name=""
          id=""
          onChange={this.handleChangeSelected}
          value={this.state.value}
        >
          <option value="DEFAULT" disabled>
            Select City...
          </option>
          {this.state.Cities.map((el) => {
            return (
              <option value={el.index} key={el.index}>
                {el.name}
              </option>
            );
          })}
        </select>
      </div>
    );
  }
}
