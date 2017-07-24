import React, {Component} from 'react'
import {Field, FieldArray, reduxForm} from 'redux-form'
import validate from './validate'
import {connect} from 'react-redux'


const renderField = ({input, label, type, placeholder, meta: {touched, error}}) => (
    <div>
        <label>{label}</label>
        <div className="">
            <input
                className="form-control"
                {...input}
                type={type}
                placeholder={placeholder}
            />
            {/*{touched && error && <span>{error}</span>}*/}
        </div>
    </div>
)

const renderTextArea = ({input, label, type, placeholder, meta: {touched, error}}) => (
    <div>
        <h3>
            <label>{label}</label>
        </h3>
        <div>
            <textarea
                className="form-control"
                rows="3"
                {...input}
                type={type}
                placeholder={placeholder}/>
            {/*{touched && error && <span>{error}</span>}*/}
        </div>
    </div>
)


const typeDishes = [
    'vegan',
    'kosher',
    'halal'
];

const renderType = ({
    input, label, type,
    meta: {touched, error}
}) => (
    <div className="form-inline">
        <div className="checkbox">
            <label>vegan</label>
            <input {...input} type='checkbox' name='vegan'/>
        </div>
        <div className="checkbox">
            <label>kosher</label>
            <input {...input} type='checkbox' name='kosher'/>
        </div>
        <div className="checkbox">
            <label>halal</label>
            <input {...input} type='checkbox' name='halal'/>
        </div>
    </div>
)

const renderOptions = ({fields, meta: {touched, error}}) => (
    <div className="container">
        <div className="container">
            <div className="row">
                <div className="col-sm-4">
                    <h3>Options</h3>
                </div>
                <div className="col-sm-4">
                    <h3>Price</h3>
                </div>
            </div>
        </div>

        {fields.map((option, index) =>
            <div
                className="row"
                key={index}>

                <div className="col-sm-4">
                    <Field
                        name={`options[${index}].name`}
                        type="text"
                        component={renderField}
                    />
                </div>
                <div className="col-sm-4">
                    <Field
                        name={`options[${index}].price`}
                        type="text"
                        component={renderField}
                    />
                </div>
                <button
                    className="btn"
                    type="button"
                    title="Remove Option"
                    onClick={() => fields.remove(index)}>DEL
                </button>
            </div>
        )}
        <div>
            <button
                className="btn"
                type="button"
                onClick={() => fields.push({})}>
                Add options
            </button>
            {/*{touched && error && <span>{error}</span>}*/}
        </div>
    </div>
)

const renderSizes = ({fields, meta: {touched, error}}) => (
    <div
        className="container">
        <div className="container">
            <div className="row">
                <div className="col-sm-4">
                    <h3>Size</h3>
                </div>
                <div className="col-sm-4">
                    <h3>Price</h3>
                </div>
            </div>
        </div>


        {fields.map((size, index) =>
            <div
                className="row"
                key={index}>

                <div className="col-sm-4">
                    <Field
                        name={`size[${index}].name`}
                        type="text"
                        component={renderField}
                        placeholder='size'
                    />
                </div>
                <div className="col-sm-4">
                    <Field
                        name={`size[${index}].price`}
                        type="text"
                        component={renderField}
                        placeholder='price'
                    />
                </div>
                <button
                    className="btn"
                    type="button"
                    title="Remove Size"
                    onClick={() => fields.remove(index)}>
                    del
                </button>
            </div>
        )}

        <div>
            <button
                className="btn"
                type="button"
                onClick={() => fields.push({})}>
                Add size
            </button>
            {/*{touched && error && <span>{error}</span>}*/}
        </div>
    </div>
)

class FieldArraysForm extends Component {

    render() {
        const {handleSubmit, pristine, reset, submitting} = this.props;
        return (
            <form onSubmit={handleSubmit}>
                <Field name="description" type="text" component={renderTextArea} label="Add a description"
                       placeholder="Discride the item"/>
                <FieldArray name="options" component={renderOptions}/>
                <FieldArray name="size" component={renderSizes}/>
                <FieldArray name="type" component={renderType}/>

                <div>
                    <button
                        className="btn btn-success"
                        type="submit"
                        disabled={submitting}>
                        Save Changes
                    </button>
                    {/*<button*/}
                        {/*className="btn"*/}
                        {/*type="button"*/}
                        {/*disabled={pristine || submitting}*/}
                        {/*onClick={reset}>*/}
                        {/*Clear Values*/}
                    {/*</button>*/}
                </div>
            </form>
        )
    }
}


let data = reduxForm({
    form: 'fieldArrays',
})(FieldArraysForm);


export default connect(
    state => {
        return ({
            cafes: state.cafes,
            dishes: state.dishes,
            // initialValues: this.props.data
        })
    },
)(data);
