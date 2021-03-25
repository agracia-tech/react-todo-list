import React, {Component} from 'react';
import uuid from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';




//showing some kind of change github setup
class App extends Component{
  render(){
    return (
    <div className="App">
    {/* <h1>Hello from app</h1>   */}
      <TodoInput/>
      <TodoList/>
  
    </div>
      );
    }
};

export default App;
