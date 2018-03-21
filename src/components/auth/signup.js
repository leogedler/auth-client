import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import * as actions from '../../actions';

class Signup extends Component {

    renderField(field) {
        return (
            <fieldset className="form-group">
                <label>{field.label}:</label>
                <input {...field.input} type={field.type} className="form-control" />
            </fieldset>
        )
    }

    handleFormSubmit(values){
        console.log('values', values);
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.handleFormSubmit)}>
                <Field
                    label="Email"
                    name="email"
                    type="email"
                    component={this.renderField}
                />
                <Field
                    label="Password"
                    name="password"
                    type="password"
                    component={this.renderField}
                />
                <Field
                    label="Confirm Password"
                    name="passwordConfirm"
                    type="password"
                    component={this.renderField}
                />
                <button action="submit" className="btn btn-primary">Sign up!</button>
            </form>
        )
    }
}


export default reduxForm({
    form: 'signup'
})(Signup);