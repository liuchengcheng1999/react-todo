import React, { Component } from 'react'
import TodoItem from './TodoItem'
export default class TodoList extends Component {
    render() {
        return (
            <ul>
                {
                    this.props.todos.map((todo,index) => {
                        return(
                            <TodoItem
                                taskId={todo.id}
                                key={todo.id}
                                name={todo.name}
                                isComplete={todo.isComplete}
                                removeTask={this.props.removeTask}
                                rename={this.props.rename}
                                toggleComplete={this.props.toggleComplete}
                            />
                        )
                    })
                }
            </ul>
        )
    }
}