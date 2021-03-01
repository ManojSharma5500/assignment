import React, { useState } from 'react'
import './App.css';
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import Login from './components/Login'
import Main from './components/Main'


function App() {
  const [token, setToken] = useState();

  if(!token){
    return <Login setToken={setToken}/>
  }

  return (
    <div className = "App">
        <BrowserRouter>
          <Switch>
            {/* <Route exact path='/' component={Login} /> */}
            <Route exact path='/main' component={Main} />
          </Switch>
        </BrowserRouter>
        
    </div>

  );
}

export default App;
