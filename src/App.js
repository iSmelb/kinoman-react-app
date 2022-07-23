import React from "react";
import { HashRouter } from "react-router-dom";
import AppRouters from "./components/AppRouters";
import './style/app.scss';

function App() {
  return (
    <HashRouter>
      <AppRouters/>
    </HashRouter>
  );
}

export default App;
