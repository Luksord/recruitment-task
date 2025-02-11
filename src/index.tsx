import React from "react";
// import * as ReactDOM from "react-dom";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
// import Home from "./pages/HomePage/Home";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";
import "./global.css";
import { store } from "./store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <BrowserRouter>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </BrowserRouter>
  </Provider>
);
