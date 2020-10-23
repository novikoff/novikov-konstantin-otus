import React, { Component } from "react";
import { connect } from "react-redux";
import {} from "../../redux/action/actions";
import { Route, Switch } from "react-router-dom";
import { withRouter } from "react-router";
import "./App.less";
import { BrowserRouter as Router } from "react-router-dom";
import FirstPage from "../FirstPage/FirstPage";
interface IState {
  AppReducer: { [key: string]: any };
}

interface IProps {}

class App extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={FirstPage} />
          <Route>
            <FirstPage />
          </Route>
        </Switch>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state: IState, ownProps) {
  return {
    //full_cities_list: state.AppReducer.full_cities_list,
    //API_KEY: ownProps.API_KEY,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    // addNumber: (payload) => dispatch(addNumber(payload)),
    // onAsyncAdd: (payload) => dispatch(addAsync(payload)),
    // onLoadCities: (json_list) => dispatch(LoadCities(json_list)),
    // onSetApiKey: (ApiKey) => dispatch(setApiKey(ApiKey)),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
