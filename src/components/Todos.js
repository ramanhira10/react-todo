import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {

  //mandatory lifecycle method
  render() {

    return this.props.todos.map((todo) => (
        <TodoItem
          todo={todo}
          key={todo.id}
          delTodo={this.props.delTodo}
          markComplete={this.props.markComplete} />
    ));
  }
}

// PropTypes
Todos.prototypes = {
  todos: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
};

export default Todos;