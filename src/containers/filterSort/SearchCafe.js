import React, {Component} from 'react';
import {findCafeAction} from '../../actions/filterSort/findCafeAction';
import {connect} from 'react-redux';


class SearchCafe extends Component {
    findCafe() {
        this.props.onFindTrack(this.findCafeInput.value);
    }

    render() {
        return (
            <div className="row">
                <input
                    className="col-9"
                    ref={(input) => {
                    this.findCafeInput = input
                    }}
                    placeholder='Find cafe'
                />

                <button
                    className="btn-default col-3"
                    onClick={this.findCafe.bind(this)}>Search
                </button>
            </div>

        )
    }
}

export default connect(
    null,
    dispatch => ({
        onFindTrack: (searchName) => {
            dispatch(findCafeAction(searchName));
        }
    })
)(SearchCafe);