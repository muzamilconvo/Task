import React from "react";
import ARView from "./components/ARView";

function App() {
  return (
    <div>
      <h1>3D view</h1>

      <ARView imageval={process.env.PUBLIC_URL + "/book.jpeg"} />
    </div>
  );
}

export default App;
