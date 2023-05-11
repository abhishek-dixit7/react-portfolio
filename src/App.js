import React from "react";
import { Home, Footer } from "./containers";
import { Navbar } from "./components";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="gradiant__bg">
        <Navbar />
      </div>
      <Home />
      <Footer />
    </div>
  );
};

export default App;
