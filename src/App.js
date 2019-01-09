import React, { Component } from 'react';

import './App.css';
import Navigation from './components/Navigation'
import TodoForm from './components/TodoForm'
import { todos } from './todos.json';

class App extends Component {
  
  constructor () {
    super();
    this.state =  {
      title: 'Aplicación de tareas',
      nTareas: 10,
      todos 
    }
    this.handleAddTodo=this.handleAddTodo.bind(this)
  }

  handleAddTodo(todo) {
    this.setState({
      todos: [...this.state.todos, todo]
    })

  }

  removeTodo(index) {
   console.log(index)
   this.setState({
     todos: this.state.todos.filter((e, i) => {
       return i !== index
     })
   })

  }

  render() {
   const todos =  this.state.todos.map((todo, index) =>  
   (
   <div className="col-md-4 col-sm-6 mb-4" key={index}>
     <div className="card ">
       <div className="card-body">
         <div className="card-header">
           <h4>{todo.title}</h4>
           <span className="badge badge-pill badge-info ml-2">
             {todo.priority}
           </span>
         </div>
         <p className="card-text">
           {todo.description}
         </p>
         <p className="card-text">
           {todo.responsible}
         </p>
         <div className="card-footer">
         <button className="btn btn-danger" onClick={this.removeTodo.bind(this,index) } >
         X
         </button>
         </div>
       </div>
     </div>
   </div>
   ))


    
    return (
    <div className="App">
      <Navigation titulo="Tasks By Gmrf18" cantidad= {todos.length} />
     <div className="App-body">
      <div className= "container mt-4">
        
        <div className="mb-5">
        <TodoForm onAddTodo={this.handleAddTodo} />
        </div>
        
        <div className= "row">
          
         {todos}
        </div>
      </div>
     </div>
    </div>
    );
  }
}

export default App;
