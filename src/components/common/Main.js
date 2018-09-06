import React from 'react';
import {Route, Switch} from "react-router-dom";
import HomePage from "../home/HomePage";
import AboutPage from "../about/AboutPage";
import CoursesPages from "../course/CoursesPage";
import ManageCoursePages from "../course/ManageCoursePages";

const Main = () => (
    <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route path="about" component={AboutPage}/>
      <Route path="course" component={ManageCoursePages}/>
      <Route path="course/:id" component={ManageCoursePages}/>
      <Route path="courses" component={CoursesPages}/>
    </Switch>
);

export default Main;
