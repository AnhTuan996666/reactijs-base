import React from 'react';
import { toast } from 'react-toastify';

class ListTodoComponent extends React.Component {
  state = {
    editListTodo: {},
  }
  handleDelete = (item) => {
    console.log('check item: ', item);
    this.props.delete(item)
    toast.success('Xóa thành công');
  }

  handleEditTodo = (item) => {
     console.log('check item edit: ', item);
     this.props.update(item)
  }

render() {
  let {listTodo , editTodo} = this.props;
  let isEmtyObj = Object.keys(editTodo).length === 0;
    return (
      <>
      {listTodo && listTodo.length > 0 && listTodo.map((item, index) => {
        return (
          <div key={index} className="conten-list"> 
            <div className="w-75">
            {isEmtyObj === true ? 
              <p className='mt-5'>{index + 1} - {item.title}</p>
            :
            <>
            {
              editTodo.id === item.id ?
              <span>
                {index + 1}<input type="text" value={editTodo.title} />
              </span>
              : 
              <p className='mt-5'>{index + 1} - {item.title}</p>
            }
            </>
            }
          </div>
          <div className='w-25'>
            <button className='mt-5' onClick={() => this.handleEditTodo(item)}>Edit</button>
            <button className='mt-5' onClick={() => this.handleDelete(item)}>Delete</button>
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