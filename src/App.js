import React from 'react';
import './App.css';
import { Component1 } from "./components/Component1"
import { Component2 } from "./components/Component2"
// import { Component3 } from "./components/Component3"
// import { Page } from "./components/Page"


function App() {
  return (
    <div className="App">
      {/* <Component3 />  */}
      <Component1 />
      <Component2 />
      {/* <Page /> */}
    </div>
  );
}

export default App;
