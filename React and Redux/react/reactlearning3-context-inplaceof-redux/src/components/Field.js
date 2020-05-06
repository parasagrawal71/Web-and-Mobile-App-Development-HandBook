import React from "react";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

class Field extends React.Component {
  renderLabel(value) {
    return value.language === "english" ? "Name" : "Naam";
  }

  render() {
    return (
      <div className="ui field">
        <ColorContext.Consumer>
          {(color) => (
            <label className={`ui label ${color}`} style={{ width: "25%" }}>
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
