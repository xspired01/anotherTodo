import React, { Component } from 'react';
import "./DeleteAllTodos.css";

class DeleteAllTodos extends Component {
    
    render(){
        return(
            <div className="DeleteAllTodos">
                <button  onClick={this.props.deleteAll} >CLEAR ALL TODOS!!!</button>
            </div>

        )
    }
}
   


export default DeleteAllTodos;