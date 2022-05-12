


/* eslint-disable array-callback-return */
/* eslint-disable no-undef */
import React, { Component } from 'react';
import './App.css'
class App extends Component {
 
   constructor() {
     super(); 
     this.state ={
       message: 'Hello world',
       newTodo: '',
       todos: [{
         tittle: 'Learn Raect',
          done: false
       }, {
         tittle: 'learn JXS',
         done: false
       }]
     };
   }
   foremSubmited(event) {
     event.preventDefault();
     this.setState({
       newTodo: '',
      todos: [...this.state.todos, {
        tittle: this.state.newTodo,
        done: false
      }]
    })
   }

   newTodoCganged (event) {
    this.setState({
      newTodo: event.target.value
    });
    
   }
   toggleTodoDone(event){
     console.log(event.target.checked);
     const todos = [...this.state.todos];
      todos[index] = {...todos[index] };
     todos[index].done = event.target.checked;
     console.log(todos);
    this.setState({
       todos
       
    })
   }

   removeTodo(index){
    const todos = [...this.state.todos];
    todos.splice(index, 1)
    this.setState({
      todos
      
   })
   }

   allDoen(){
      const todos  = this.state.todos.map(todo => {
        console.log(todo);
           return{
             
             ...todo,
             done : true
           }
      })

       this.setState({
       todos
       
    })
   }
   render() {
    return (
      <div className='App'>
      <div>{this.state.message}</div>
      <form onSubmit={(event)=> this.foremSubmited(event)}>
        <label htmlFor='newTodo'> New Todo</label>
        <input onChange={ (event)=> this.newTodoCganged(event)} id='newTodo' name='newTodo'/>
        <button type='submit'>Add todo</button>
      </form>
      <button onClick={()=> this.allDoen() }>All done </button>
      <ul>
         {this.state.todos.map((todo , index) =>{
          return (<li key={todo.tittle}>
            <input  onChange={(event) => this.toggleTodoDone(event, index)} type='checkBox' checked={todo.done}/>
          <span style={{
       textDecoration: todo.done ? "line-through" : 'none'
            }}>  {todo.tittle } </span>
            <button onClick={()  => this.removeTodo(index) }> Remove</button>
            </li>)
         })}
      </ul>
      </div>
    )
  }
}
export default App


