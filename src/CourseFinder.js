import React, { Component } from 'react'
import CourseBox from './CourseBox';
import courses from './courses/courses.json';

class CourseFinder extends Component {

    state = {
        depNames: [],
        currDepNames: [],
        courseCodes: [],
        currCourseCodes: [],
        collapseOpened: false,
        loading: true
    }


    /**
     * Get department names and add them to the array in the state
     */
    getDepName = () => {

        let lastItem = "";  // A variable to hold the last item in the array
        courses.Courses.forEach(element => {
            let tmpCode = element.Code.toString().split(" ")[0];
            if (tmpCode !== lastItem) {
                this.setState((state) => {
                    const names = state.depNames.concat(tmpCode);
                    // console.log("depNames: ", depNames);
                    return {
                        depNames: names,
                        currDepNames: names
                    }
                });
            }
            lastItem = tmpCode;
        });

    }


    getCourseCodes = () => {

        let lastItem = "";
        courses.Courses.forEach(course => {
            let tmpCourse = course.Code.toString();
            // console.log("tmpCourse: ", tmpCourse);
            if (tmpCourse !== lastItem) {
                this.setState((state) => {
                    const courseCode = state.courseCodes.concat(tmpCourse);
                    return {
                        courseCodes: courseCode,
                        currCourseCodes: courseCode
                    }
                });
            }
            lastItem = tmpCourse;
        });
    }

    componentDidMount = () => {
        // Changing state in while rendering is dangerous, so do it in componentDidMount
        this.getDepName();
        this.getCourseCodes();
        // Wait for department names and course codes to be loaded into state, then set the loading value to false
        // to make the spinner to disappear
        this.setState({
            loading: false
        });
    }

    onCourseTextChange = (e) => {
        // console.log("this.state.depNames: ",this.state.depNames);
        // console.log("this.state.currDepNames: ",this.state.currDepNames);
        // Get an array of courses that includes the searched string
        let searchedCourse = this.state.depNames.filter(name => name.includes(e.target.value.toUpperCase()));
        let searchedCourseCode = this.state.courseCodes.filter(code => code.includes(e.target.value.toUpperCase()));
        console.log("Searched Course: ", searchedCourse);
        console.log("Searched Course Codes: ", searchedCourseCode)
        this.setState({
            currDepNames: searchedCourse,
            currCourseCodes: searchedCourseCode,
            isOpen: false
        });
    }

    render() {
        return (
            <div>
                <div className="col-4">
                    <input type="text" className="form-control" id="course-text" onChange={this.onCourseTextChange} placeholder="Search course" />
                </div>
                {
                    this.state.loading &&
                    <div className="spinner-grow text-primary courses-container" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                }
                {!this.state.loading && <CourseBox departments={this.state.currDepNames} crCodes={this.state.currCourseCodes} isOpen={this.state.collapseOpened} />}
            </div >
        );
    }

}

export default CourseFinder;