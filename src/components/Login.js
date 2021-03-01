import './Login.css'
import React,{useState} from 'react'
import PropTypes from 'prop-types'
import PutDetail from './Putdetail'



async function loginUser(credentials) {
    return fetch('http://localhost:4000/app/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }


function Login({setToken}) {

    const [username, setusername] = useState();
    const [password, setpassword] = useState();
        const handleSubmit = async e => {
            e.preventDefault();
            const token = await loginUser({
              username,
              password
            });
            setToken(token);
          }

        return(
            <div>
                <div className="login-side" >
                    <h1>Login</h1>
                    <form onSubmit={handleSubmit}>
                        <label>
                            <input type="text" name="username"  onChange={e => setusername(e.target.value)} />
                            <br/><input type="text" name="password"  onChange={e => setpassword(e.target.value)} />
                            <br/><br/><input type="submit" />
                        </label>
                    </form>
                </div>
                <div className= "registration-side">
                    <PutDetail/>
                </div>
            </div>
        )
    // }
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}

export default Login;