import React from "react";
import {Router, Route} from "react-router-dom";
import PropTypes from "prop-types";
import {Provider} from "react-redux";
import App from "./App";
import history from "../history";

const Root = ({store}) => (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/:filter?" component={App}/>
    </Router>
  </Provider>
);
Root.propTypes = {
  store: PropTypes.oneOfType([
    PropTypes.func.isRequired,
    PropTypes.object.isRequired
  ]).isRequired
};


export default Root;
