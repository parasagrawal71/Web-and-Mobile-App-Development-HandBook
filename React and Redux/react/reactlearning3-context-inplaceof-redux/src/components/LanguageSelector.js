import React from "react";

class LanguageSelector extends React.Component {
  render() {
    return (
      <div>
        Select a language:
        <i
          className="flag us"
          onClick={() => this.onLanguageChange("english")}
        />
        <i className="flag in" onClick={() => this.onLanguageChange("hindi")} />
      </div>
    );
  }
}

export default LanguageSelector;
