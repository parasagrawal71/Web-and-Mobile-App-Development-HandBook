import React, { useState } from "react";
import ResourceList from "./ResourceList";

function App() {
  const [resource, setResource] = useState("posts");
  return (
    <div className="App">
      <button onClick={() => setResource("posts")}>Posts</button>
      <button onClick={() => setResource("todos")}>Todos</button>
      <ResourceList resource={resource} />
    </div>
  );
}

export default App;
