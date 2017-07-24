import React, { Component } from 'react';
import ListCafe from '../components/ListCafes';
import {connect} from 'react-redux';
import {filteringObj} from '../helpers/filter';

class ListCafeFind extends Component {
    render () {
        return (
            <ListCafe list={this.props.cafes} />
        )
    }
}

export default connect(
    state => {
        return({
        cafes:
            filteringObj
                .addArr(state.cafes)
                .findCafe(state.findCafe)
                .filterKichen(state.filterKichen)
                .minOrderFilter(state.minOrder.search)
                .openApp(state.openNow.status)
                .sort(state.sort.sortBy)
                .showStep()
    })}
)(ListCafeFind);
