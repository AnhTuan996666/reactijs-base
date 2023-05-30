import React from 'react';
import { toast } from 'react-toastify';

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
    let {editTodo, listTodo} = this.state
    let isEmtyObj = Object.keys(editTodo).length === 0;
    //save
    if(!isEmtyObj && editTodo.id === todo.id) {
      let listTodoCoppy = [...listTodo]
      let objIndex = listTodoCoppy.findIndex((item => item.id === todo.id));
      listTodoCoppy[objIndex].title = editTodo.title
      this.setState({
        listTodo: listTodoCoppy,
        editTodo: {}
      })
      toast.success("Cập nhật thành công")
    return
    }
    // edit
    this.setState({editTodo: todo})
  }

  handleChange = (event) => {
    this.setState({title:event.target.value})
  }

  handleEditTodoOnchange = (e) => {
  let editTodoCoppy = {...this.state.editTodo}
  editTodoCoppy.title = e.target.value;
    this.setState({
      editTodo: editTodoCoppy
    })
  }

  addListToDo = (list) => {
    this.setState({listTodo: [...this.state.listTodo, list]})
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if(!this.state.title) {
      toast.error("Thêm thất bại")
    }else {
      this.addListToDo({
        id: Math.floor(Math.random() * 100),
        title: this.state.title
      })
      toast.success("Thêm thành công")
    }
  }

  deleteList = (list) => {
    this.state.listTodo.splice(list, 1)
    this.setState({listTodo: [...this.state.listTodo]})
    toast.error('Xóa thành công');
  }

render() {
  let {listTodo, editTodo} = this.state
  let isEmtyObj = Object.keys(editTodo).length === 0;
  return (
    <>
      <div className="add-todo">
          <input type="text" className="" onChange={(event) => this.handleChange(event)} value={this.state.title}/>
          <button type="button" onClick={(event) => this.handleSubmit(event)}>Add</button>
        </div>

        <div>
          {listTodo.map((item, index) => {
              return (
                <div key={index} className="conten-list"> 
                <div className="w-75">
                  {isEmtyObj ? 
                    <p className='mt-5'>{index + 1} - {item.title}</p>
                  :
                  <>
                  {
                    editTodo.id === item.id ?
                    <span>
                      {index + 1}<input type="text" onChange={(e) => this.handleEditTodoOnchange(e)} value={editTodo.title} />
                    </span>
                    :
                    <p className='mt-5'>{index + 1} - {item.title}</p>
                  }
                  </>
                  }
              </div>
              <div className='w-25'>
                <button className='mt-5' onClick={() => this.handEditTodo(item)}>
                {
                !isEmtyObj && editTodo.id === item.id ?  'Save' : 'Edit'
                }
                </button>
                <button className='mt-5' onClick={() => this.deleteList(index)}>Delete</button>
              </div>
            </div>
              )
            })
          }
      </div>
    </>
  )
}

}

export default ListComponent;