import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form'; 
import { connect } from 'react-redux';


class Signin extends Component{

    renderField(field){
        return (
            <fieldset className="form-group">
                <label>{field.label}:</label>
                <input {...field.input} className="form-control" />
            </fieldset>
        )
    }

    handleFormSubmit = ({email, password}) => {
        console.log(email, password);
        console.log(this.props);
        // Need to do something to log user in

    }

    render(){
        const { handleSubmit, fields: { email, password } } = this.props;

        return (
            <form onSubmit={handleSubmit(this.handleFormSubmit)}>
                <Field 
                    label="Email"
                    name="email"
                    component={this.renderField}
                />
                <Field 
                    label="Password"
                    name="password"
                    component={this.renderField}
                />
                <button action="submit" className="btn btn-primary">Sign in</button>
            </form>
        )

    }
}

export default reduxForm({
    form:'signin',
    fields: ['email', 'password']
})(Signin)

