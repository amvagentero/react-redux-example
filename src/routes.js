import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from "./components/App";
import HomePage from "./components/home/HomePage";
import AboutPage from "./components/about/AboutPage";
import CoursesPages from "./components/course/CoursesPage";
import ManageCoursePages from "./components/course/ManageCoursePages";

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="about" component={AboutPage}/>
    <Route path="course" component={ManageCoursePages}/>
    <Route path="course/:id" component={ManageCoursePages}/>
    <Route path="courses" component={CoursesPages}/>
  </Route>
);
