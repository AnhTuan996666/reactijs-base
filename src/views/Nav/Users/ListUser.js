import React from "react";
import axios from "axios";

class ListUser extends React.Component {
    state= {
        ListUser: []
    }
   async componentDidMount() {
        // axios.get("https://reqres.in/api/users?page=2")
        // .then(res => {
        //     console.log("check repong",res);
        // })
        let res = await axios.get("https://reqres.in/api/users?page=2");
        console.log("check repong",res.data.data);
        this.setState({ListUser: res && res.data ? res.data.data : []});
    }
    render() {
        let {ListUser} = this.state;
        return (
            <>
            <div className="list-container">
                <div className="list-title">
                    List User
                </div>
                <div className="list-user">
                    <table >
                        <tr>
                            <th>Firstname</th>
                            <th>Lastname</th>
                            <th>Avatar</th>
                        </tr>
                        {ListUser && ListUser.length > 0 &&
                            ListUser.map((item,index) => {
                                return (
                                <tr key={item.id}>
                                    <td>{item.first_name}</td>
                                    <td>{item.last_name}</td>
                                    <td width="20px" height="20px"><img width="100%" height="auto" src={item.avatar} alt={item.last_name}/></td>
                                </tr>
                            )
                        })
                    }
                    </table>
                </div>
            </div>
            </>
        )
    }
}

export default ListUser;