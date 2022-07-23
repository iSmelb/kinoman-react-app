import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouters from "./components/AppRouters";
import './style/app.scss';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <AppRouters/>
    </BrowserRouter>
  );
}

export default App;
