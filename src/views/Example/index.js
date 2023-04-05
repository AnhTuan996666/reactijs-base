import React from 'react'
import ChildComponent from './ChildComponent'
import AddComponent from './AddComponent'

class Mycomponent extends React.Component {
  state = {
    arrJobs: [
      { id: 'abcJob1', title: 'Developers', salary: '300' },
      { id: 'abcJob2', title: 'Testers', salary: '400' },
      { id: 'abcJob3', title: 'Project managers', salary: '200' }
    ]
  }

    addNewJod = (jod) => {
      this.setState({
          arrJobs: [...this.state.arrJobs, jod]
      })
    }
    
    deleteJod = (jod) => {
      let currentJod = this.state.arrJobs
      currentJod.filter(item => item.id !== jod.id)
      this.setState({
        arrJobs: currentJod
      })
    }

    render() {
      console.log('>>>>call render', this.state);
      console.log('>>>>check props', this.props);
      return(
        <>
          <AddComponent addNewJod={this.addNewJod}/>
          <ChildComponent arrJobs={this.state.arrJobs}  deleteJod={this.deleteJod}/>
        </>
      ) 
    }
}


export default Mycomponent;
