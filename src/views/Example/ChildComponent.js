import React from 'react'

class ChildComponent extends React.Component {
    state = {
        isShown: false,
    }

    handleDelete = (item) => {
      this.props.deleteJod(item)
    }

    render() {
        let { arrJobs  } = this.props;
        let { isShown  } = this.state;

        const  handlerShow = (event) =>{
          event.preventDefault();
          this.setState({ isShown: !this.state.isShown});
        } 
        return (
          <>
            {!isShown && 
              <div className="job-lists">
                {arrJobs.map((item, index) => {
                    return (
                      <div key={index}>
                        <p className="mt-5">{item.title} - {item.salary}$ <span onClick={() => this.handleDelete(index)}>x</span></p>
                      </div>
                    )
                  })
                }
              </div>
            }
              <button className="btn btn-" onClick={(event) => handlerShow(event)}>{!isShown ? 'Ẩn' : 'Hiện'}</button>
          </>
        )
    }
}

export default ChildComponent;