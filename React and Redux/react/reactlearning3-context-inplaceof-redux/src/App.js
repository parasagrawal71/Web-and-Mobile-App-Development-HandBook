import React from "react";
import UserCreate from "./components/UserCreate";
import LanguageContext from "./contexts/LanguageContext";
import ColorContext from "./contexts/ColorContext";
import LanguageSelector from "./components/LanguageSelector";

class App extends React.Component {
  state = { language: "english" };

  onLanguageChange = (language) => {
    this.setState({ language });
  };

  render() {
    return (
      <div className="ui container">
        <LanguageSelector />
        <ColorContext.Provider value="red">
          <LanguageContext.Provider value={this.state.language}>
            <UserCreate />
          </LanguageContext.Provider>
        </ColorContext.Provider>
      </div>
    );
  }
}

export default App;
