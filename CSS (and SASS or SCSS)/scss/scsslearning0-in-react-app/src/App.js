import React from "react";
import "./App.scss";
import "./App.css";

const colorVar = "red";

function App() {
  const assumeItProp = "blue";

  return (
    <div className="App">
      <header className="App-header" style={styles.headerColor}>
        Header
      </header>
      <div className="App-content" style={{ color: assumeItProp }}>
        CONTENT
      </div>
      <div className="text" style={{ "--textColor": assumeItProp }}>
        2nd CONTENT
      </div>
    </div>
  );
}

const styles = {
  headerColor: {
    color: colorVar,
  },
};

export default App;
