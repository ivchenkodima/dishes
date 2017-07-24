import React, {Component} from 'react'
import {connect} from 'react-redux';
import {filteringObj} from '../helpers/filter';
import NavLink from './NavLink'


export class CafeInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cafe: filteringObj
                .addArr(this.props.cafes)
                .findId('id', this.props.params.cafeinfo)
                .showStep(),
            dishes: filteringObj
                .addArr(this.props.dishes)
                .showStep(),
        }
    }

    render() {
        let template;
        if (this.props.params.cafeinfo) {
            const cafe = this.state.cafe[0];
            template = (
                <div className='row'>
                    <h4>tets cafeino {this.props.params.cafeinfo}</h4>
                    <h1 className='col-md-12'>{cafe.nameRestaurant}</h1>
                    <ul>
                        {this.props.dishes.map((el,key) => {
                            if (el.cafeId == cafe.id) {
                                return (
                                    <li
                                        key={key}
                                    >
                                        <h4>{el.name}</h4>
                                        <NavLink to={'edit/' + el.id}>EDIT</NavLink>
                                        <p>{el.type}</p>
                                        <p>Price: $
                                            { el.size[0] ? el.size[0].price : null}
                                        </p>
                                    </li>
                                )
                            }
                        })
                        }
                    </ul>
                    <h3 className='col-md-12'>Else dishes</h3>
                    <ul>
                        {this.props.dishes.map((el, key) => {
                            if (el.cafeId != cafe.id) {
                                return (
                                    <li
                                        key={key}
                                    >
                                        <h4>{el.name}</h4>
                                        <NavLink to={'edit/' + el.id}>EDIT</NavLink>
                                        {this.props.cafes.map((elIn) => {
                                            if (elIn.id == el.cafeId)
                                                return <p>Cafe: {elIn.nameRestaurant}</p>
                                        })}
                                        <p>{el.type}</p>
                                        <p>Price: $
                                            { el.size[0] ? el.size[0].price : null}
                                        </p>
                                    </li>
                                )
                            }
                        })
                        }

                    </ul>


                    <div className='col-md-12'>{this.props.children}</div>
                </div>
            )
        } else {
            template = (
                <div className='row'>
                    {/*<h3 className='col-md-12'>{this.props.params.genre}</h3>*/}
                    <div className='col-md-12'>HERE will be info of cafe</div>
                </div>
            )
        }

        return template;
    }
}


export default connect(
    state => {
        return ({
            cafes: filteringObj
                .addArr(state.cafes)
                .showStep(),
            dishes: state.dishes
        })
    }
)(CafeInfo);