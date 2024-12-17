import React from "react";
import ReactDOM from "react-dom/client"; // Correct import
import { Provider } from "react-redux";
import store from "./redux/store";
import App from "./App";
import './index.css';

// Use createRoot for React 19
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
