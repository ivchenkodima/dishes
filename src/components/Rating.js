import React, {Component} from 'react';
export default class Rating extends Component {
    render() {
        const divStyle = {
            background: 'blue',
            width: '100px',
            height: '10px',
            textAlign: 'right',
        };

        const spanStyle = {
            background: 'silver',
            width: `${+this.props.rating*20}px`,
            height: '10px',
            display: 'block',
    };

        return (
            <div style={divStyle}>
                <span style={spanStyle}></span> {this.props.rating}
            </div>
        )
    }
}