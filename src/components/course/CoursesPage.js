import React, {Component, PropTypes} from 'react';
import {connect} from "react-redux";
import * as courseActions from "../../actions/courseActions";
import {bindActionCreators} from "redux";
import CourseList from "./CourseList";
import {browserHistory} from "react-router";
import LoadingDots from "../common/LoadingDots";

class CoursesPages extends Component {
  constructor(props, context) {
    super(props, context);
    this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
  }

  courseRow(course, index) {
    return <div key={index}>{course.title}</div>;
  }

  redirectToAddCoursePage() {
    browserHistory.push('/course');
  }

  render() {
    const {courses, loading} = this.props;
    return (
      <div>
        <h1>Courses</h1>
        <input type="submit"
               value="Add Course"
               className="btn btn-primary"
               onClick={this.redirectToAddCoursePage}/>
        <CourseList courses={courses}/>
        {loading && <LoadingDots interval={200} dots={10}/>}
      </div>
    );
  }
}

CoursesPages.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses,
    loading: state.ajaxCallsInProgress > 0
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPages);
