import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";

import Layout from "app/Ui/Layout";
import Home from "./app/screens/Home";
import Login from "./app/screens/Login";
import PartnerActive from "./app/screens/PartnerActive";
import PartnerIdle from "./app/screens/PartnerIdle";
import StructureActive from "./app/screens/StructureActive";
import StructureIdle from "./app/screens/StructureIdle";
import AddStructure from "./app/screens/AddStructure";
import Registration from "./app/screens/Registration";

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Registration" element={<Registration />} />
          <Route path="Login" element={<Login />} />
          <Route path="PartnerActive" element={<PartnerActive />} />
          <Route path="PartnerIdle" element={<PartnerIdle />} />
          <Route path="StructureActive" element={<StructureActive />} />
          <Route path="StructureIdle" element={<StructureIdle />} />
          <Route path="AddStructure" element={<AddStructure />} />
        </Routes>
      </Layout>
    </Router>
  );
}
