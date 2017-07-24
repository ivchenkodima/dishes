import React, {Component} from 'react';
import {connect} from 'react-redux';
import InfoCafe from './DetailCafe';
import getDistance from '../helpers/getDistance';

export class ListCafe extends Component {
    constructor(props){
        super(props);

    }

    openNow (open, close){
        const status = new Date().getHours();
        return status < close && status > open;
    }


    render () {
        return(
        <ul>
            {
                this.props.list.map((el) => {
                    const idKey = el.nameRestaurant.replace(/\s/ig, '');
                    return (
                    <InfoCafe
                        key={idKey}
                        openNow={this.openNow(el.status.open, el.status.close)}
                        distanseAway = {
                            getDistance(
                                this.props.geoLocation.latitude,
                                this.props.geoLocation.longitude,
                                el.geolocation.latitude,
                                el.geolocation.longitude)
                        }
                        {...el}
                        onClick=""
                    />
                )

                })
            }
        </ul>
        )
    }
}

export default connect(
    state => {
        return({
            geoLocation: state.geoLocation.coords
        })}
)(ListCafe);

