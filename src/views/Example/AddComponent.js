import React from "react";
class AddComponent extends React.Component {
  state = {
    title:"",
    salary:"",
    }

  handleJod = (event) => {
    this.setState({title:event.target.value})
  }

  handleSalary = (event) => {
    this.setState({salary:event.target.value})
  }

  handleSubmit = (event) => {
  event.preventDefault();
  if(!this.state.title || !this.state.salary) {
    alert("Xin vui lòng nhập")
    return
  }

  if(this.state.salary < 0) {
    alert("Xin vui nhập sô lớn hơn 0")
  }else if (this.state.salary > 1000) {
    alert("Xin vui nhập sô nhỏ hơn 1000")
  } else {
    this.props.addNewJod({
      id: Math.floor(Math.random() * 100),
      title: this.state.title,
      salary: this.state.salary
    });
  }
}

render() {
    return (
      <form>
        <label htmlFor="fname">Job title:</label><br/>
        <input type="text" onChange={(event) => this.handleJod(event)} value={this.state.title}/><br/>
        <label htmlFor="fname">Salary:</label><br/>
        <input type="number" onChange={(event) => this.handleSalary(event)} className="mt-5" value={this.state.salary}/><br/>
        <input className='mt-30' onClick={(event)=> this.handleSubmit(event)} type="submit"/>
      </form> 
    )
  }
}
export default AddComponent;