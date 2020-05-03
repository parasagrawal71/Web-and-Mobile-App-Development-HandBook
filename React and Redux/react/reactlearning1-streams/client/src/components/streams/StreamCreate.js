// import React from "react";
// import { Field, reduxForm } from "redux-form";
// // Field is a component with capital letter 'F' and reduxForm is a function name with small letter 'r'
// import { createStream } from "../../actions";
// import { connect } from "react-redux";

// class StreamCreate extends React.Component {
//   renderError({ touched, error }) {
//     if (touched && error) {
//       return (
//         <div className="ui error message">
//           <div className="header">{error}</div>
//         </div>
//       );
//     }
//   }

//   renderInput = ({ input, label, meta }) => {
//     // return <input onChange={formProps.input.onChange} value={formProps.input.value}/>
//     // return <input {...formProps.input} />
//     const className = `field ${meta.error && meta.touched ? "error" : ""}`;
//     return (
//       <div className={className}>
//         <label>{label}</label>
//         <input {...input} autoComplete="off" />
//         {/* {meta.touched ? <span>{meta.error}</span> : null} */}
//         {this.renderError(meta)}
//       </div>
//     );
//   };

//   onSubmit = (formValues) => {
//     // event.preventDefault();
//     // console.log('formValues', formValues);
//     this.props.createStream(formValues);
//   };

//   render() {
//     return (
//       <form
//         onSubmit={this.props.handleSubmit(this.onSubmit)}
//         className="ui form error"
//       >
//         <Field name="title" component={this.renderInput} label="Enter Title" />
//         <Field
//           name="description"
//           component={this.renderInput}
//           label="Enter Description"
//         />
//         <button className="ui button primary">Submit</button>
//       </form>
//     );
//   }
// }

// const validate = (formValues) => {
//   const errors = {};
//   if (!formValues.title) {
//     errors.title = "You must enter a title";
//   }
//   if (!formValues.description) {
//     errors.description = "You must enter a description";
//   }
//   return errors;
// };

// // export default connect()(reduxForm({
// //     form: 'streamCreate',
// //     validate: validate
// // })(StreamCreate));

// const formWrapped = reduxForm({
//   form: "streamCreate",
//   validate: validate,
// })(StreamCreate);

// export default connect(null, { createStream })(formWrapped);

// ********************************************************  After Refactoring  **************************************************** //

import React from "react";
import { createStream } from "../../actions";
import { connect } from "react-redux";
import StreamForm from "./StreamForm";

class StreamCreate extends React.Component {
  onSubmit = (formValues) => {
    this.props.createStream(formValues);
  };

  render() {
    return (
      <div>
        <h3>Create a Stream</h3>
        <StreamForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(null, { createStream })(StreamCreate);
