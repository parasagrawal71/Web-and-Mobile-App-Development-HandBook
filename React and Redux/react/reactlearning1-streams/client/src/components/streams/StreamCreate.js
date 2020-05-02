import React from 'react';
import { Field, reduxForm } from 'redux-form'; 
// Field is a component with capital letter 'F' and reduxForm is a function name with small letter 'r'

class StreamCreate extends React.Component{
    renderInput({ input, label}) {
        // return <input onChange={formProps.input.onChange} value={formProps.input.value}/>
        // return <input {...formProps.input} />
        return (
            <div className="field">
                <label>{label}</label>
                <input {...input} />
            </div>
        )
    }

    onSubmit(formValues) {
        // event.preventDefault();
        // console.log(formValues)
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form">
                <Field name="title" component={this.renderInput} label='Enter Title' />
                <Field name="description" component={this.renderInput} label='Enter Description' />
                <button className="ui button primary">Submit</button>
            </form>
        );
    }
}

export default reduxForm({
    form: 'streamCreate'
})(StreamCreate);