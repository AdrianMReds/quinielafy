import React from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home";
import Resultados from "./Components/Pages/Resultados";
import Tabla from "./Components/Pages/Tabla";
import Reglas from "./Components/Pages/Reglas";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/resultados" element={<Resultados />} />
            <Route path="/tabla" element={<Tabla />} />
            <Route path="/about" element={<Reglas />} />
          </Routes>
        </div>
      </Router>
    </React.Fragment>
  );
}

export default App;
