import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Todo from './component/Todo';
import ToDoAdd from './component/ToDoAdd';
import ToDoSearch from './component/ToDoSearch';

class App extends Component {
  
  render() {
    return (
      <div className="App">
          {/* To :
          <To /> */}
          <Todo />
          


      </div>
    );
  }
}

export default App;
