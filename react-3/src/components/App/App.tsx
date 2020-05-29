import React, { Component } from "react";
import { connect } from "react-redux";
import {
  addNumber,
  addAsync,
  LoadCities,
  setApiKey,
} from "../../redux/action/actions";
import SelectCity from "./../SelectCity/SelectCity";
import NavEl from "../NavEl/NavEl";
import { Route } from "react-router-dom";
import { withRouter } from "react-router";
import City from "./../City/City";
const cities_json: {
  [key: string]: any;
} = require("../../data/current.city.list.min.json");

interface IState {
  AppReducer: { [key: string]: any };
}

interface IProps {
  counter?: number;
  addNumber(): void;
  onAsyncAdd(): void;
  onLoadCities(any): void;
  onSetApiKey(string): void;
  full_cities_list: [{ [key: string]: any }];
  json_data: { [key: string]: any };
  API_KEY: string;
}

class App extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.props.onSetApiKey(this.props.API_KEY);
    this.props.onLoadCities(cities_json);
  }

  componentDidMount() {}

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <NavEl />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            {this.props.full_cities_list &&
              this.props.full_cities_list.length && <SelectCity />}
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            {this.props.full_cities_list &&
              this.props.full_cities_list.length && (
                <Route path="/city/:id" component={City} />
              )}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state: IState, ownProps) {
  return {
    full_cities_list: state.AppReducer.full_cities_list,
    API_KEY: ownProps.API_KEY,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addNumber: (payload) => dispatch(addNumber(payload)),
    onAsyncAdd: (payload) => dispatch(addAsync(payload)),
    onLoadCities: (json_list) => dispatch(LoadCities(json_list)),
    onSetApiKey: (ApiKey) => dispatch(setApiKey(ApiKey)),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
