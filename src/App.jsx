import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import data from "./data/data";
import Planets from "./pages/Planets";
import SideBar from "./pages/SideBar";
import Nav from "./components/Nav";

function App() {
  console.log(data.name);
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/sideBar" element={<SideBar />} />
        <Route path=":planetId" element={<Planets />} />
      </Routes>
    </div>
  );
}

export default App;
