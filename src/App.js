import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';
import About from './components/pages/About';
//import uuid from 'uuid';
import './App.css';
import axios from 'axios';


class App extends Component {

  state = {
    todos: []
  };

  componentDidMount () {

    axios.get('http://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => this.setState({ todos: res.data }));
  }

  // Delete Todo
  delTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter( )]
    });

    axios.delete(`http://jsonplaceholder.typicode.com/${id}`)
      .then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] }));
  }

  //Toggle Complete
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    });
  }

  addTodo = (title) => {

    axios.post('http://jsonplaceholder.typicode.com/todos', {
      title: title,
      completed: false
    }).then(res => this.setState({ todos: [...this.state.todos, res.data] }));
  }

  //mandatory lifecycle method
  render() {

    return (
      <Router>
        <div>
          <div className="container">
            <Header />
            <Route path="/" render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo}/>
                <Todos
                  todos={this.state.todos}
                  markComplete={this.markComplete}
                  delTodo={this.delTodo} />
              </React.Fragment>
            )} />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
      
    );
  }
}


export default App;