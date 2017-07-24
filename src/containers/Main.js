import React, { Component } from 'react';
import ListCafeFind from './CafeListShow';
import SortList from './filterSort/SortList';
import SearchCafe from './filterSort/SearchCafe';
import ChooseKichen from './filterSort/ChooseKichen';
import ChooseOpenNow from './filterSort/OpenNowComp';
import MinOrder from './filterSort/minOrder';


import {connect} from 'react-redux';


export default class App extends Component {
    render () {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <SearchCafe/>

                        <ChooseKichen />
                        <ChooseOpenNow/>
                        <MinOrder/>
                    </div>
                    <div className="col-md-9">
                        <SortList />
                        <ListCafeFind />
                    </div>
                </div>
            </div>
        )

    }
};