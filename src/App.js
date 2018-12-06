import React, { Component } from 'react';
import './App.css';
import ToDo from './components/ToDo.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { description: 'Reschedule dentist appt', isCompleted: true},
        { description: 'Make personal flickr account', isCompleted: false},
        { description: 'Do thanksgiving offering', isCompleted: false}
      ]
    };
  }

  render() {
    return (
      <div className="App">
        <ul>
          { this.state.todos.map( (todo, index) => 
            <ToDo key={ index } description={ todo.description } isCompleted={ todo.isCompleted }/>
            )}
        </ul>
      </div>
    );
  }
}

export default App;
