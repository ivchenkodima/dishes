import React, { Component } from 'react'

export default class Admin extends Component {
    static onEnter(nextState, replace) {
        const login = window.localStorage.getItem('rr_login')
        if (login !== 'admin') {
            replace('/')
        }
    }
    render() {
        return (
            <div className='container'>
                <div className='col-md-12'>
                    <h1>Pages /admin</h1>
                </div>
                <div className="row">
                   <div className="col-md-6">
                       <h2>ADD CAFE</h2>
                       <p>TODO: add actions/reducers + view</p>
                   </div>

                <div className="col-md-6">
                    <h2>ADD DISHES</h2>
                    <p>TODO: add actions/reducers + view</p>
                </div>

                </div>

            </div>
        )
    }
}