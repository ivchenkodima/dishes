import React, { Component } from 'react'
import NavLink from '../components/NavLink'

export default class App extends Component {
    render() {
        return (
            <div className='container'>
                <ul className='nav nav-pills'>
                    <li><NavLink onlyActiveOnIndex={true} to='/'>Main</NavLink></li>
                    <li><NavLink to='/admin'>admin</NavLink></li>
                    <li><NavLink to='/login'>Enter</NavLink></li>
                </ul>
                {this.props.children}
            </div>
        )
    }
}