import { useState } from "react";
import NavigationBar from "./component/NavigationBar";

import "./App.css";

function App() {
  return (
    <>
      <div>
        {/* Navigation bar */}

        <NavigationBar />

        {/* Main component  */}
        <main></main>
      </div>
    </>
  );
}

export default App;
