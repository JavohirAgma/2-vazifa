import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import Login from './components/Login'

export default class App extends Component {
    render() {
        return (
            <div className='container'>
                <h1 className='text-center'>Moshinalar saytiga xush kelibsiz </h1>
                <div style={{width:'300px', margin:"auto"}} className='d-flex justify-content-around align-items-center my-3'>
                    <Link to="/login"><button className='btn btn-success '>Login</button></Link>
                    <Link to="/App"><button className='btn btn-success '>Home</button></Link>
                </div>
                    <Route path={"/login"} component={Login} />
            </div>
        )
    }
}
