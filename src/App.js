import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Wands from "./wands";
import WandsList from "./WandsList";
import NavBar from "./NavBar";

function App() {
  return (
    <>
      <NavBar />
      <WandsList Wands={Wands} />
    </>
  );
}

export default App;
