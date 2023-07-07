import React, { Component } from 'react'
import { Route, Switch, Link, } from 'react-router-dom'
import Cards from './Cards'
import Cardsinfo from "./Cardsinfo"

export default class Login extends Component {

  render() {
    return (
      <div className='row'>
        <div className="col-md-6 offset-3">
          <div className="card">
            <div className="card-body">
              <form>
                <input className='form-control' type="text" placeholder='full name' />
                <input className='form-control my-2' type="number" placeholder='phone nubmer' />
                <input className='form-control ' type="password" placeholder='password' />
                <input className='form-control mt-2' type="email" placeholder='E-mail' />
                <Link to="/login/cardstable"><button className='btn btn-danger mt-2 float-end' >Moshinalar ro'yhatiga otish</button></Link>
                <Switch >
                  <Route path="/login/cardstable:id/:name/:color/:cost/:year" component={Cardsinfo} />
                  <Route path="/login/cardstable" component={Cards} />
                </Switch>
              </form>
            </div>
          </div>


        </div>
      </div>
    )
  }
}
