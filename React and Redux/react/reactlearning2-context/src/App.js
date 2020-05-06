import React from "react";
import UserCreate from "./components/UserCreate";
import LanguageContext from "./contexts/LanguageContext";
import ColorContext from "./contexts/ColorContext";

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
        <ColorContext.Provider value="red">
          <LanguageContext.Provider value={this.state.language}>
            <UserCreate />
          </LanguageContext.Provider>
        </ColorContext.Provider>

        <LanguageContext.Provider value={this.state.language}>
          <ColorContext.Provider value="orange">
            <UserCreate />
          </ColorContext.Provider>
        </LanguageContext.Provider>

        {/* <LanguageContext.Provider value={this.state.language}>
          <UserCreate />
        </LanguageContext.Provider>
        <LanguageContext.Provider value="hindi">
          <UserCreate />
        </LanguageContext.Provider>
        <UserCreate /> */}
      </div>
    );
  }
}

export default App;
