import React, {Component} from 'react';
import { filterKichenAction } from '../../actions/filterSort/filterKichen';
import {connect} from 'react-redux';


class ChooseKichen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            kichen :['mediterranean', 'pizza', 'vegitarian', 'burger&co', 'asian'],
            checkKichen: []
        }

        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        const { checked, value } = e.target;
        let { checkKichen } = this.state;
        if(checked && checkKichen.indexOf(value) === -1) {
            checkKichen.push(value);
        }else {
            checkKichen = checkKichen.filter(i => i !== value)
        }
        this.setState({
            checkKichen
        });
        this.props.onChooseKichen(this.state.checkKichen);
    }

    render() {
        return (
            <div>
                {this.state.kichen.map((el) => {
                    return (
                        <div key={el}>
                            <label>
                                <input
                                    type='checkbox'
                                    value={el}
                                    onChange={this.handleChange} />
                                {el}
                            </label>
                        </div>
                    )
                })}
            </div>


        )
    }
}

export default connect(
    null,
    dispatch => ({
        onChooseKichen: (checkBoxes) => {
            dispatch(filterKichenAction(checkBoxes));
        }
    })
)(ChooseKichen);