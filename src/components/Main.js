import React from 'react'
import {Link} from 'react-router-dom'
import Getdetail from './Getdetail'
import PutDetail from './Putdetail'

class MainPage extends React.Component {
    render(){
        return(
            <div>
                For Logout click here :
                <Link to= "/login">Logout</Link>
                <Getdetail/>
                <PutDetail/>
            </div>
        )
    }
}

export default MainPage;