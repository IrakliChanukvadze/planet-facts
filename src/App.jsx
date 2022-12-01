import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import data from "./data/data";
import Planets from "./pages/Planets";

function App() {
  console.log(data.name);
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path=":planetId" element={<Planets />} />
      </Routes>
    </div>
  );
}

export default App;
