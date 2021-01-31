import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { makeServer } from "./server/inedx";
import { Provider } from "react-redux";
import store from './store';
import App from './App'
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
