import React from 'react';
import { toast } from 'react-toastify';

class AddTodoComponent extends React.Component {
  state = {
    id:"",
    title:"",
  }
  handleChange = (event) => {
    this.setState({title:event.target.value})
  }
  
  handleSubmit = (event) => {
    event.preventDefault();
    if(!this.state.title) {
      toast.error("Thêm thất bại")
    }else {
      this.props.AddList({
        id: Math.floor(Math.random() * 100),
        title: this.state.title
      })
      toast.success("Thêm thành công")
    }
    
  }
render() {

    return (
      <>
        <div className="add-todo">
          <input type="text" className="" onChange={(event) => this.handleChange(event)} value={this.state.title}/>
          <button type="button" onClick={(event) => this.handleSubmit(event)}>Add</button>
        </div>
      </>
    
    )
  }
}

export default AddTodoComponent;