import React, { Component } from 'react';
import {connect} from 'react-redux';
import {sortList} from '../../actions/filterSort/sortBy';

class SortList extends Component {
    constructor (props){
        super(props);
        this.state = {
            sortList : ['rating', 'minOrder', 'nameRestaurant']
        }
    }
    sortABC(typeSort, id) {
        this.props.onSort(typeSort);
    }

    render () {
        return (
            <div className="container"> SortBy:
                <ul className="row">
                    {
                        this.state.sortList.map((el) => {
                           return (
                           <li
                               className="col-sm-3"
                               onClick={this.sortABC.bind(this, el)}
                               key={el}>
                               ABC {el}
                           </li>
                           )
                        })
                    }
                </ul>
            </div>
        )

    }
}

export default connect(
    null,
    dispatch => ({
        onSort: (typeSort) => {
            dispatch(sortList(typeSort));
            }
    })
)(SortList);