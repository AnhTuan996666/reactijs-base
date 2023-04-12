import React from 'react';
import ListTodoComponent from './ListComponent';
import AddTodoComponent from './AddComponent';

class ListComponent extends React.Component {
  state = {
    listTodo: [
      {id:"todo1",title:"Đoàn Anh Tuấn"},
      {id:"todo2",title:"Đặng thọ bình"},
      {id:"todo3",title:"Ngô Ngọc Bách"},
    ],
    editTodo: {},
  }

  handEditTodo = (todo) => {
    this.setState({editTodo: todo})
  }

  addListToDo = (list) => {
    this.setState({listTodo: [...this.state.listTodo, list]})
  }

  deleteList = (list) => {
    this.state.listTodo.splice(list, 1)
    this.setState({listTodo: [...this.state.listTodo]})
  }

  
render() {
  return (
    <>
      <AddTodoComponent AddList={this.addListToDo}/>
      <ListTodoComponent listTodo={this.state.listTodo} update={this.handEditTodo} editTodo={this.state.editTodo} delete={this.deleteList}/>
    </>
  )
}

}

export default ListComponent;