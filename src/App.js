import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Homepage } from "./pages/index";

function App() {
  return (
    <div className="App flex flex-col min-h-screen">
      <Router>
        <div className="flex-grow">
          <Routes>
            <Route path="/poke-builder" element={<Homepage />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
