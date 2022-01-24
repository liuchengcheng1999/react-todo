import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import TodoList from './components/TodoList'
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: []
    }
  }
  // 生成taskid
  generateId() {
    return Math.floor(Math.random() * 9000) + 1000;
  }
  // 切换待办事项的完成状态
  handleToggleComplete(taskId) {
    var todos = this.state.todos
    for (var i in todos) {
      if (todos[i].id === taskId) {
        todos[i].isCompleted = !todos[i].isCompleted
        break;
      }
    }
    this.setState({ todos })
  }
  // 删除某待办事项
  handleRemoveTask(taskId) {
    var todos = this.state.todos
    todos = todos.filter((task) => {
      return task.id !== taskId
    })
    this.setState({ todos })
  }
  // 添加待办事项
  handleAdd() {
    var taskName = ReactDOM.findDOMNode(this.taskname).value.trim()
    if (!taskName) {
      return ''
    }
    var taskId = this.generateId()
    var todos = this.state.todos
    todos.push({ id: taskId, name: taskName, isCompleted: false })
    this.setState({
      todos
    })
  }
  // 重命名待办事项
  handleRename(taskId, name) {
    var todos = this.state.todos
    for (var i in todos) {
      if (todos[i].id === taskId) {
        todos[i].name = name
        break;
      }
    }
    this.setState({ todos })
  }
  render() {
    var statistics = {
      todoCount: this.state.todos.length || 0,
      todoCompleteCount: this.state.todos.filter((todo) => {
        return todo.isCompleted
      }).length
    }

    return (
      <div>
        <h3>Todo List Demo</h3>
        <header>
          <input type="text" ref="taskname" />&nbsp;&nbsp;
            <button onClick={this.handleAdd.bind(this)}>Add Todo</button>
        </header>
        <TodoList todos={this.state.todos} removeTask={this.handleRemoveTask.bind(this)} toggleComplete={this.handleToggleComplete.bind(this)} rename={this.handleRename.bind(this)} />
        <footer>{statistics.todoCompleteCount}已完成 / {statistics.todoCount}总数</footer>
      </div>
    );
  }
}

export default App;
