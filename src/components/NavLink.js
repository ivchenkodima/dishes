import React, { Component } from 'react'
import { Link } from 'react-router'

export default class NavLink extends Component {
    render() {
        // console.log('navlink', {...this.props})
        return <Link {...this.props} activeClassName='active'/>
    }
}