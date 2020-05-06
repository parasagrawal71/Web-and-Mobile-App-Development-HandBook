import React from "react";
import UserCreate from "./components/UserCreate";

class App extends React.Component {
  state = { language: "english" };

  onLanguageChange = (language) => {
    this.setState({ language });
  };

  render() {
    return (
      <div className="ui container">
        <div>
          Select a language:
          <i
            className="flag us"
            onClick={() => this.onLanguageChange("english")}
          />
          <i
            className="flag in"
            onClick={() => this.onLanguageChange("hindi")}
          />
        </div>
        <UserCreate />
      </div>
    );
  }
}

export default App;
