import React, {Component} from 'react'
import {connect} from 'react-redux'
import {initialize} from 'redux-form';
import {filteringObj} from '../../helpers/filter';
import {browserHistory} from 'react-router';
import {ADD_DISHES, EDIT_DISHES, DELETE_DISHES, deleteDishes, editDishes} from '../../actions/dishes';

import FieldArraysForm from '../../components/EditDishesForm/formEditDishes'

export class editDishesComp extends Component {
    constructor(props) {
        super(props);
        let {post, initializePost} = this.props;
    }

    render() {
        const cafesList = this.props.cafes.map((el) => {
            return el.id
        });
        const dishes = filteringObj
                        .addArr(this.props.dishes)
                        .findId('id', this.props.params.edit)
                        .showStep()[0];

        return (
            <div>
                <p>test edit dishes</p>
                <h1>NAME DISHES: {dishes.name}</h1>
                <h2>ID: {this.props.params.edit}</h2>
                <FieldArraysForm initialValues={{
                    ...dishes,
                    cafesList
                    }}
                    onSubmit={(values) => {
                        const index = filteringObj
                             .addArr(this.props.dishes)
                             .findPosition(values.id);
                        this.props.initializeDishes(values, index);
                        alert('changes saved to store');
                        browserHistory.push('/');
                        }
                    }
                />
                <button
                    className="btn btn-danger"
                    onClick={ () => {
                            const index = filteringObj
                                .addArr(this.props.dishes)
                                .findPosition(dishes.id);
                            this.props.deleteDishesFromList(index);
                            alert('dishes delete from store');
                            browserHistory.push('/');
                        }
                    }>DELETE DISHES
                </button>
            </div>
        )
    }
}

export default connect(
    state => {
        return ({
            cafes: state.cafes,
            dishes: state.dishes,
        })
    },
    dispatch => {
        return ({
            initializeDishes: function (value, id) {
                dispatch(editDishes(value, id));
            },
            deleteDishesFromList: function(id){
                dispatch(deleteDishes(id));
            }
        })
    }
)(editDishesComp);

