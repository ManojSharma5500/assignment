import React from 'react'
import axios from 'axios'

class PutDetail extends React.Component {
    state = {
        first_name : '',
        last_name : '',
        user_name : '',
        email : '',
        password : ''
    }

    handleChangeFirstName = event => {
        this.setState({
            first_name: event.target.value,
        })
    }

    handleChangeLastName = event => {
        this.setState({
            last_name: event.target.value,
        })
    }

    handleChangeUserName = event => {
        this.setState({
            user_name: event.target.value,
        })
    }

    handleChangeEmail = event => {
        this.setState({
            email: event.target.value,
        })
    }

    handleChangePassword = event => {
        this.setState({
            password: event.target.value,
        })
    }


    handleSubmit = event => {
        event.preventDefault();
        axios.post('http://localhost:4000/app/signup', this.state )
        .then(res => {
            console.log(res);
            console.log(res.data);
        })
    }

    
render(){
    return (
        <div>
            <h1>Registration</h1>
            <form onSubmit= { this.handleSubmit }>
                <label>
                    First Name :
                    <input type="text"  name="first_name"  onChange={this.handleChangeFirstName} />
                    <br/>Last Name :
                    <input type="text" name="lname" onChange={this.handleChangeLastName} />
                    <br/>user Name :
                    <input type="text"  name="user" onChange={this.handleChangeUserName} />
                    <br/>email :
                    <input type="text" name="email" onChange={this.handleChangeEmail} />
                    <br/>password :
                    <input type="text"  name="passwords" onChange={this.handleChangePassword} />
                </label>
                <br/> <br/><button type="submit">Submit</button>
            </form>
        </div>

    )
};

};

export default PutDetail;