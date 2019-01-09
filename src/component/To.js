import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class To extends Component {
    constructor() {
        super();
            this.state = {
                todos:[],
                currentTodo: ""
            };
        }

        onInputChange = e => {
            console.log((e.target.value))
            this.setState({ currentTodo: e.target.value});
        }

        onClick = () => {
            let todosCopy = this.state.todos.slice();
            todosCopy.push(this.state.currentTodo);
            console.log(todosCopy)
            this.setState({
                todos: todosCopy,
                currentTodo: ""
            });
        }
              

    render() {
        // let bulletedTodos = this.state.todos.map((e,i) =>{

        // })
        return (
            <div>
                      
                <input placeholder="Enter todo" value={this.state.currentTodo} 
                onChange={this.onInputChange} />
                
                <button onClick={this.onClick}> Add! </button>
                
                <br/>
                
                {this.state.todos.length === 0 ? "No todos yet" : "You still have some todos"}
               
            </div>
        );
    }
   
}

export default To;
