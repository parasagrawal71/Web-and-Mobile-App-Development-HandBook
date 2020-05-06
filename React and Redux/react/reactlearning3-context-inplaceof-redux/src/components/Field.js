import React from "react";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

class Field extends React.Component {
  //   static contextType = LanguageContext;

  renderLabel(value) {
    return value === "english" ? "Name" : "Naam";
  }

  render() {
    // const text = this.context === "english" ? "Name" : "Naam";
    return (
      <div className="ui field">
        <ColorContext.Consumer>
          {(color) => (
            <label className={`ui label ${color}`} style={{ width: "25%" }}>
              {/* <LanguageContext.Consumer>
            {(value) => (value === "english" ? "Name" : "Naam")}
          </LanguageContext.Consumer> */}
              <LanguageContext.Consumer>
                {(value) => this.renderLabel(value)}
              </LanguageContext.Consumer>
            </label>
          )}
        </ColorContext.Consumer>
        <input />
      </div>
    );
  }
}

export default Field;
