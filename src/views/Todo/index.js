import React from 'react';
import { toast } from 'react-toastify';

class ListComponent extends React.Component {
  state = {
    listTodo: [
      {id:"todo1",title:"Đoàn Anh Tuấn"},
      {id:"todo2",title:"Đặng thọ bình"},
      {id:"todo3",title:"Ngô Ngọc Bách"},
    ],
  }

  handleChange = (event) => {
    this.setState({title:event.target.value})
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
    toast.success('Xóa thành công');
  }
render() {
  let {listTodo} = this.state
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
                <span className='mt-5'>{index + 1} - {item.title}</span>
                <div className=''>
                  <button className='mt-5'>Edit</button>
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