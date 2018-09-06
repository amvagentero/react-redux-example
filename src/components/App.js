import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Header from "./common/Header";
import {Route, Switch} from "react-router-dom";
import {connect} from "react-redux";
import ManageCoursePages from "./course/ManageCoursePages";
import AboutPage from "./about/AboutPage";
import HomePage from "./home/HomePage";
import CoursesPages from "./course/CoursesPage";

class App extends Component {
  render() {
    return (
      <div>
        <Header loading={this.props.loading}/>
        <div className="container">
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route path="/about" component={AboutPage}/>
            <Route path="/course" component={ManageCoursePages}/>
            <Route path="/course/:id" component={ManageCoursePages}/>
            <Route path="/courses" component={CoursesPages}/>
          </Switch>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  //children: PropTypes.object.isRequired, -> {this.props.children}
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    loading: state.ajaxCallsInProgress > 0
  };
}

export default connect(mapStateToProps)(App);
