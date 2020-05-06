import React from "react";
import LanguageContext from "../contexts/LanguageContext";

class Button extends React.Component {
  static contextType = LanguageContext; // contextType is a keyword that you cannot change
  // Using 'static', we are adding a property directly to the class itself.

  render() {
    // console.log(this.context);
    const text = this.context === "english" ? "Submit" : "Dabao";
    return <button className="ui button primary">{text}</button>;
  }
}

// Another method to declare a contextType property
// Button.contextType = LanguageContext;

export default Button;
