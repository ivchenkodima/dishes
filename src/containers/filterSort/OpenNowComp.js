import React, {Component} from 'react';
import { openNowFilter } from '../../actions/filterSort/filterOpenNow';
import {connect} from 'react-redux';

class ChooseOpenNow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: false
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        if(this.state.status) {
            this.state.status = false;
            return this.props.onChooseOpenNow(false);
        }
        this.state.status = true;
        return this.props.onChooseOpenNow(true);
    }

    render() {
        return (
            <div className="container">
                <label>
                    <input
                        type='checkbox'
                        onChange={this.handleChange} />
                    Open Now
                </label>
            </div>

        )
    }
}

export default connect(
    null,
    dispatch => ({
        onChooseOpenNow: (checkBoxes) => {
            dispatch(openNowFilter(checkBoxes));
        }
    })
)(ChooseOpenNow);