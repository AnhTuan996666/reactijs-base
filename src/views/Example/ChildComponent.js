import React from 'react'

class ChildComponent extends React.Component {
    render() {
        console.log('>>> check props: ', this.props)
        let { arrJobs  } = this.props;
        return (
            <>
                <div className="job-lists">
                    {arrJobs.map((item, index) => {
                        console.log('item', item)
                        return (
                            <div key={index}>
                                <p>{item.title}</p>
                            </div>
                        )
                        })
                    }
                    <button className="btn btn-" onClick={(e) => this.props.handleClickProps(e)}>
                        Chào Anh
                    </button>
                </div>
            </>
        )
    }
}

export default ChildComponent;