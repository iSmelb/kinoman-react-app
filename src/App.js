import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouters from "./components/AppRouters";
import Footer from "./components/Footer";
import Header from "./components/Header";
import './style/app.scss';

function App() {
  return (
      <BrowserRouter>
      <div className="wrapper">
        <Header/>
        <AppRouters/>
        <Footer/>
      </div>
      </BrowserRouter>
  );
}

export default App;
