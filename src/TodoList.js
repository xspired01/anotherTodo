import React, { Component } from 'react';
import NewTodoForm from "./NewTodoForm"
import Todo from './Todo';
import DeleteAllTodos from "./DeleteAllTodos";
import Header from "./Header";
import TodoRemoveComplete from "./TodoRemoveComplete";
import "./TodoList.css";

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todosArray: []
        }
        this.create = this.create.bind(this);
        this.remove = this.remove.bind(this);
        this.update = this.update.bind(this);
        this.toggleCompletion = this.toggleCompletion.bind(this);
        this.deleteAll = this.deleteAll.bind(this);
        this.removeComplete = this.removeComplete.bind(this);
    }
    create(newTodo) {
        this.setState({
            todosArray: [...this.state.todosArray, newTodo]
        })
       
    }
    remove(id){
        this.setState({
            todosArray: this.state.todosArray.filter(todo => todo.id !== id)
        });
    }
    deleteAll(){
        this.setState({ todosArray: []});
    }
    update(id, updatedTask){
        const updatedTodos = this.state.todosArray.map(todo => {
            if(todo.id === id){
                return {...todo, task: updatedTask}
            } 
            return todo;
        });
        this.setState({ todosArray: updatedTodos});
    }
    toggleCompletion(id){
        const updatedTodos = this.state.todosArray.map(todo => {
            if (todo.id === id) {
                return { ...todo, completed: !todo.completed }
            }
            return todo;
        });
        this.setState({ todosArray: updatedTodos });
    }
    removeComplete(){
        this.setState({
            todosArray: this.state.todosArray.filter(todo => !todo.completed)
        });
    }
    render() {
        const todosArray = this.state.todosArray.map(todo => {
            return <Todo 
                    key={todo.id} 
                    id={todo.id} 
                    task={todo.task} 
                    completed={todo.completed}
                    removeTodo={this.remove}
                    updateTodo={this.update}
                    toggleTodo={this.toggleCompletion}
            />
        })
        return (
            <div className="TodoList">
                <Header branding="The Awesome React Todo List"/>
                <NewTodoForm createTodo={this.create} />
                <DeleteAllTodos deleteAll={this.deleteAll}/>
                <TodoRemoveComplete removeCompleteTodo={this.removeComplete} />
                <ul>
                    {todosArray}
                </ul>
            </div>
        )
    }
}

export default TodoList;