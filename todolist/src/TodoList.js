import React, { Component } from 'react';
import ListItem from './ListItem'

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      list: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }
  handleChange(e) {
    this.setState({
      inputValue: e.target.value
    })
  }
  handleClick() {
    let list = [...this.state.list, this.state.inputValue]
    this.setState({
      list,
      inputValue: ''
    })
  }
  handleDelete(index) {
    let {list} = this.state
    list.splice(index, 1)
    this.setState({
      list
    })
  }
  render() {
    return (
      <div className="TodoList">
        <input value={this.state.inputValue} onChange={this.handleChange}/>
        <button onClick={this.handleClick}>确认</button>
        <ul>
          <ListItem list={this.state.list} delete={this.handleDelete.bind(this)}/>
        </ul>
      </div>
    );
  }
}

export default TodoList;
