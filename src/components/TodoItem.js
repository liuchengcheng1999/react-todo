import React, { Component } from 'react';
export default class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isEditing: false,
            inputValue: this.props.name
        }
    }
    // 切换完成事项的待办状态
    toggleComplete() {
        this.props.toggleComplete(this.props.taskId)
    }
    // 处理输入框的输入
    handleChange(e) {
        this.setState({
            inputValue: e.target.value
        })
    }
    // 编辑待办事项
    handleEdit() {
        this.setState({isEditing: true})
    }
    // 确认修改
    handleSure() {
        this.props.rename(this.props.taskId, this.state.inputValue)
        this.setState({isEditing: false})
    }
    // 取消重命名
    handleCancel() {
        this.setState({isEditing: false, inputValue: this.props.name})
    }
    // 删除待办事项
    handleRemove() {
        this.props.removeTask(this.props.taskId)
    }
    render() {
        var { taskId, name, isCompleted } = this.props,
            operation = ''
        if (isCompleted) {
            operation = <s>{name}</s>
        } else {
            if (this.state.isEditing) {
                operation = 
                <span>
                    <input type="text" value={this.state.inputValue} onChange={this.handleChange.bind(this)} />
                    &nbsp;&nbsp;
                    <button onClick={this.handleCancel.bind(this)}>
                        Cancel
                    </button>
                </span>
            } else {
                operation = 
                <span>
                    <b>{name}</b>
                    &nbsp;&nbsp;
                    <button onClick={this.handleEdit.bind(this)}>Edit</button>
                </span>
            }
        }
        return (
            <li key={taskId}>
                <input type="checkbox" checked={isCompleted} onChange={this.toggleComplete.bind(this)}/>
                &nbsp;&nbsp;
                {operation}
                <button onClick={this.handleRemove.bind(this, taskId)}>
                    Remove
                </button>
            </li>
        )
    }
}