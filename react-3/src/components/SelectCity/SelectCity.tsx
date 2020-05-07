import React, { Component } from "react";
import { connect } from "react-redux";

import { withRouter } from "react-router";
import {
  dropDownSwitch,
  selectChangeValue,
  SelectLoadCities,
} from "../../redux/action/actions";

import "./SelectCity.less";
interface IState {
  AppReducer: { [key: string]: any };
}

interface IProps {
  counter?: number;
  dropDownFlag: boolean;
  onSwitchDropDown(flag?: boolean): void;
  onChange(string): void;
  onSelectLoadCities(): void;
  onSelectCities(any): void;
  onRedir(): void;
  full_cities_list: [];
  rand_cities_list: [];
  history: any;
}

class SelectCity extends Component<IProps> {
  constructor(props: IProps) {
    super(props);
    if (this.props.full_cities_list.length > 0) {
      this.props.onSelectLoadCities();
    }
  }

  eventChange = (e) => {
    let value = e.target.value;
    this.props.onChange(value);
  };

  eventChangeItem = (e, item: any): void => {
    e.preventDefault();
    this.props.onSwitchDropDown(false);
    this.props.history.push("/city/" + item);
  };

  eventSwitchDropDown = () => {
    this.props.onSwitchDropDown();
  };

  render() {
    return (
      <div className="btn-group dropdown">
        <button
          type="button"
          className="btn btn-outline btn-default dropdown-toggle"
          id="select"
          data-toggle="dropdown"
          aria-expanded={this.props.dropDownFlag ? "true" : "false"}
          onClick={this.eventSwitchDropDown}
        >
          Choose item
          <span className="caret" />
        </button>
        <ul
          className={`dropdown-menu bullet dropdown-search-box ${
            this.props.dropDownFlag ? `show` : null
          }`}
          aria-labelledby="select"
          role="menu"
        >
          <li role="presentation" className="search-box">
            <input
              type="text"
              className="form-control"
              placeholder="Type text..."
              name="search_city"
              autoComplete="false"
              onChange={this.eventChange}
            />
          </li>
          {this.props.rand_cities_list &&
            this.props.rand_cities_list.map(
              (el: { [key: string]: any }, index) => {
                return (
                  <li role="presentation" className="result" key={index}>
                    <a
                      href=""
                      role="menuitem"
                      className="dropdown-item"
                      onClick={(e) => this.eventChangeItem(e, el.id)}
                    >
                      {el.name}
                    </a>
                  </li>
                );
              }
            )}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state: IState, ownProps) {
  return {
    dropDownFlag: state.AppReducer.dropDownFlag,
    full_cities_list: state.AppReducer.full_cities_list,
    rand_cities_list: state.AppReducer.rand_cities_list,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onSwitchDropDown: (flag?: boolean) => dispatch(dropDownSwitch(flag)),
    onChange: (value) => dispatch(selectChangeValue(value)),
    onSelectLoadCities: () => dispatch(SelectLoadCities()),
  };
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SelectCity)
);
