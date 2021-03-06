import React, {Component} from 'react';
import {v4 as uuid} from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';




//showing some kind of change github setup
class App extends Component{
state ={
  items:[{id: 1, title:'wake-up'},{id:2, title: "main breakfast"}],
  id:uuid(),
  item:'',
  editItem: false
};

handleChange = (e)=>{console.log('handleChange')}
handleSubmit = (e)=>{console.log('handleSubmit')}
clearList = ()=>{console.log('clearList ')}
handleDelete = (id)=>{console.log(`handle edit ${id}`)}
handleEdit = (id)=>{console.log(`edit edit ${id}`)}
  render(){
    
    return (
    <div className="container">
     <div className="row">
     <div className="col-10mx-autocol-md8mt-5">
       <h3 className="text-capitalized text-center">
          todo input
       </h3>
      <TodoInput item={this.state.item} handleChange={this.handleChange} handleSubmit= {this.handleSubmit}
      editItem={this.state.editItem}/>
          <TodoList item= {this.state.item} clearList= {this.clearList} handleDelete = {this.handleDelete}
          handleEdit = {this.handleEdit}/>
       </div>   
       </div> 
    </div>
      );
    }
};

export default App;
