import React from 'react'
import axios from 'axios'
class getData extends React.Component {
    state = {
        datalist : []
    }

    componentDidMount(){
        axios.get('http://localhost:4000/app/')
        .then(res => {
            console.log(res.data)
            this.setState({ datalist:res.data});
        });
    }

    render(){
        return(
            <ul>
                  <tr>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>password</th>
                </tr>
                {this.state.datalist.map(datamap => 
                    <tr key={datamap._id}>
                        <td>{datamap.first_name}</td>
                        <td>{datamap.last_name}</td>
                        <td>{datamap.user_name}</td>
                        <td>{datamap.email}</td>
                        <td>{datamap.password}</td>
                    </tr>
                )}
            </ul>
        )
    }
}

export default getData;