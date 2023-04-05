import React from 'react'

class ChildComponent extends React.Component {
    state = {
        isShown: false,
    }

    handleDelete = (item) => {
        console.log(item)
        this.props.deleteJod(item)
    }

    render() {
        console.log('>>> check props: ', this.props)
        let { arrJobs  } = this.props;
        let { isShown  } = this.state;
        
        const  handlerShow = (event) =>{
            console.log('.......', event)
            this.setState({ isShown: !this.state.isShown });
        } 
        return (
            <>
                {!isShown && 
                    <div className="job-lists">
                        {arrJobs.map((item, index) => {
                            if (item.salary < 1000) {
                                return (
                                    <div key={index}>
                                        <p className="mt-5">{item.title} - {item.salary}$ <span onClick={() => this.handleDelete(item)}>x</span></p>
                                    </div>
                                )
                            }
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