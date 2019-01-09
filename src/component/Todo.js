import React, { Component } from 'react';
import TodoAdd from './ToDoAdd';
import ToDoSearch from './ToDoSearch';


class Todo extends Component {
    render() {
        return (
            <div>
                <div className="card-header">Todo List</div>
            <TodoAdd />
            <ToDoSearch />
            </div>

        );
    }
}

export default Todo;
