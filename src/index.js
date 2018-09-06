/* eslint-disable import/default */
import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import './styles/styles.css'; //Webpack can import CSS files too!
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';
import configureStore from "./store/configureStore";
import {loadCourses} from "./actions/courseActions";
import {loadAuthors} from "./actions/authorActions";
import Root from "./components/Root";

const store = configureStore();
store.dispatch(loadCourses());
store.dispatch(loadAuthors());

render(
  <Root store={store} />,
  document.getElementById('app')
);
