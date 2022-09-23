import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";

import Home from "./app/screens/Home";
import Loggin from "./app/screens/Loggin";
import PartnerActive from "./app/screens/PartnerActive";
import PartnerIdle from "./app/screens/PartnerIdle";
import StructureActive from "./app/screens/StructureActive";
import StructureIdle from "./app/screens/StructureIdle";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Loggin" element={<Loggin />} />
        <Route path="PartnerActive" element={<PartnerActive />} />
        <Route path="PartnerIdle" element={<PartnerIdle />} />
        <Route path="StructureActive" element={<StructureActive />} />
        <Route path="StructureIdle" element={<StructureIdle />} />
      </Routes>
    </Router>
  );
}
