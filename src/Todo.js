import React, { Component } from 'react';
import "./Todo.css";

class Todo extends Component {
    constructor(props){
        super(props);
        this.state = {
            isEditing: false,
            task: this.props.task
        }
        this.handleRemove = this.handleRemove.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
    }
    handleRemove(){
        this.props.removeTodo(this.props.id);
    }
    toggleForm(){
        this.setState({ isEditing: !this.state.isEditing});
    }
    handleUpdate(event){
        event.preventDefault();
        this.props.updateTodo(this.props.id, this.state.task)
        this.setState({isEditing: false});
    }
    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    handleToggle(event){
        this.props.toggleTodo(this.props.id);
    }
    render() {
        let result;
        if(this.state.isEditing){
            result = (
                <div className="Todo-edit">
                    <form className="Todo-edit-form" onSubmit={this.handleUpdate}>
                        <input 
                            type="text" 
                            value={this.state.task} 
                            name="task" 
                            onChange={this.handleChange} 
                        />
                        <button><i class="far fa-save"/></button>
                    </form>
                </div >
                )
        } else {
           result = (
                <div className="Todo-buttons">
                       <button onClick={this.toggleForm}><i className="fas fa-pen" /></button>
                       <button onClick={this.handleRemove}><i className="fas fa-trash" /></button>
                   <li className={this.props.completed ? "completed" : ""} 
                        onClick={this.handleToggle}
                    >{this.props.task}
                    </li>
                 </div >
           )
        }
        return result;
    }
}

export default Todo;