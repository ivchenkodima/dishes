import React, {Component} from 'react';
import { filterMinOrderAction } from '../../actions/filterSort/minOrder';
import {connect} from 'react-redux';


class MinOrder extends Component {
    handleChange() {
        this.props.onChangeMinOrder(this.minOrderVal.value);
    }

    render() {
        return (
            <div className="row">
                <input
                    className="col-9"
                    ref={(input) => {
                    this.minOrderVal = input
                }}
                    placeholder="enter minOrder"
                />

                <button
                    className="btn-default col-3"
                    onClick={this.handleChange.bind(this)}>Search
                </button>
            </div>


        )
    }
}

export default connect(
    null,
    dispatch => ({
        onChangeMinOrder: (searchMinOrder) => {
            dispatch(filterMinOrderAction(searchMinOrder));
        }
    })
)(MinOrder);