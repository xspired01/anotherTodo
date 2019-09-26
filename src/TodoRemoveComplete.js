import React, { Component } from 'react';
import "./TodoRemoveComplete.css";

 class TodoRemoveComplete extends Component {
     
    render() {
        return (
            <div className="TodoRemoveComplete">
                <button onClick={this.props.removeCompleteTodo} >Remove Completed Todos</button>
            </div>
        )
    }
}

export default TodoRemoveComplete;