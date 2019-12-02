import React, { Component } from 'react'
import { MdMoodBad } from 'react-icons/md'
import { IconContext } from 'react-icons'
import { UnmountClosed } from 'react-collapse'

class CourseBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            departmentNames: [],
            courseCodes: [],
            collapse: false
        };
        console.log("props", props);
    }

    // componentWillReceiveProps is deprecated
    static getDerivedStateFromProps = (props, state) => {
        return ((props.departments === state.departmentNames && props.crCodes === state.courseCodes)
            ? {}
            : {
                departmentNames: props.departments,
                courseCodes: props.crCodes,
            });
    }

    componentDidMount = () => {
        const { isOpen } = this.props;
        this.setState({
            collapse: isOpen
        });
        console.log("collapse from didMount: ", this.state.collapse);
    }

    handleDepartmentClick = (e, name) => {
        console.log("name", name);
        console.log("e", e);
        const filteredCourseCodes = this.state.courseCodes.filter(code => code.includes(name + " "));
        console.log("filteredCourseCodes", filteredCourseCodes);

        this.setState({
            courseCodes: this.state.courseCodes.concat(filteredCourseCodes),
            collapse: true
        });

        //this.setState(prevState, ());
        console.log("collapse after handleDepartmentClick: ", this.state.collapse);
        console.log("course codes from handle: ", this.state.courseCodes);
    }

    render() {

        console.log("departmentNames(render): ", this.state.departmentNames);
        console.log("courseCodes(render): ", this.state.courseCodes);

        const departmentButtons = this.state.departmentNames.map(course => {
            return (
                <button className="btn btn-primary course-btn" onClick={(e) => this.handleDepartmentClick(e, course)} key={course.toString()}>{course.toString()}</button>
            );
        });

        const codeButtons = this.state.courseCodes.map(code => {
            return (
                <button className="btn btn-primary course-btn" key={code.toString()}>{code.toString()}</button>
            );
        });

        console.log("collapse: ", this.state.collapse);

        return (
            <div className="courses-container col-12">
                <div className="row justify-content-start col-4">
                    {!this.state.collapse && departmentButtons}
                    {this.state.departmentNames.length === 0 &&
                        <IconContext.Provider value={{ size: "3em" }}>
                            <span>
                                <p>Could not find any results</p>
                                <MdMoodBad />
                            </span>
                        </IconContext.Provider>
                    }
                    {this.state.collapse &&
                        <UnmountClosed isOpened={true}>
                            {codeButtons}
                        </UnmountClosed>
                    }

                </div>
            </div>
        );
    }
}

export default CourseBox;