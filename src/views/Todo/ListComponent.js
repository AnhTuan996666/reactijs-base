import React from 'react';
import { toast } from 'react-toastify';

class ListTodoComponent extends React.Component {
  handleDelete = (item) => {
    this.props.delete(item)
    toast.success('Xóa thành công');
  }
render() {
  let {listTodo} = this.props;
    return (
      <>
      {listTodo.map((item, index) => {
        return (
          <div key={index} className="conten-list"> 
          <span className='mt-5'>{index + 1} - {item.title}</span>
          <div className=''>
            <button className='mt-5'>Edit</button>
            <button className='mt-5' onClick={(item) => this.handleDelete(index)}>Delete</button>
          </div>
        </div>
        )
      })
      }
      </>
    )
  }
}

export default ListTodoComponent;