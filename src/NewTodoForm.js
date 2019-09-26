import React, { Component } from 'react';
import uuid from "uuid/v4";
import "./NewTodoForm.css";

class NewTodoForm extends Component {
    constructor(props) {
        //NOTE: because we are NOT using props in the constructor
        //we do not need super() to take in props as super(props)
        //if we were doing something in the constructor with props,
        //then super(props) is required.
        super();
        this.state = { task: "" };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    handleSubmit(event) {
        event.preventDefault();
        this.props.createTodo({...this.state, id:uuid(), completed: false })
        this.setState({ task: "" });
    }
    render() {
        return (
            <form className="NewTodoForm" onSubmit={this.handleSubmit}>
                <label htmlFor="task">New Todo</label>
                <input
                    type="text"
                    placeholder="New Todo..."
                    id="task"
                    name="task"
                    value={this.state.task}
                    onChange={this.handleChange}
                />
                <button>Add Todo</button>
            </form>
        );
    }
}

export default NewTodoForm;