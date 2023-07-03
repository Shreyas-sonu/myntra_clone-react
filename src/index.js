import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Link, NavLink } from "react-router-dom";
import { store } from "./store/store";
import { Provider } from "react-redux";
import { FilterProvider } from "./context/FilterContext";
import { SortProvider } from "./context/Sortcontext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <FilterProvider>
        <SortProvider>
          <App />
        </SortProvider>
      </FilterProvider>
    </Provider>
  </BrowserRouter>
);
