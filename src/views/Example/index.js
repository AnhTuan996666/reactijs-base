import React from 'react'
import ChildComponent from './ChildComponent'

class Mycomponent extends React.Component {
   state = {
    fistName:"",
    lastName:"",
    arrJobs: [
        { id: 'abcJob1', title: 'Developers', salary: '500 $' },
        { id: 'abcJob2', title: 'Testers', salary: '400 $' },
        { id: 'abcJob3', title: 'Project managers', salary: '1000 $' }
    ]
   }
   handleFistName = (event) => {
    this.setState({fistName:event.target.value})
   }

   handleLastName = (event) => {
    this.setState({lastName:event.target.value})
   }

   handleClickProps = (e) => {
        e.preventDefault()
        alert("Click");
   }

   handleSubmit = (event) => {
    event.preventDefault();
    alert(`Hello ${this.state.fistName} ${this.state.lastName}`);

    console.log(this.state);
   }

    render() {
        console.log('>>>>call render', this.state);
        console.log('>>>>check props', this.props);
       return(
        <>
         <form>
            <label htmlFor="fname">First name:</label><br/>
            <input type="text" onChange={(event) => this.handleFistName(event)} value={this.state.fistName}/><br/>
            <label htmlFor="fname">First name:</label><br/>
            <input type="text" onChange={(event) => this.handleLastName(event)} value={this.state.lastName}/><br/>
            <input onClick={(event)=> this.handleSubmit(event)} type="submit"/>
        </form> 
        <ChildComponent arrJobs={this.state.arrJobs} handleClickProps={this.handleClickProps}/>
        </>
       ) 
    }
}


export default Mycomponent;
