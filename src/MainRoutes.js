import React from "react";
import { Route, Routes } from "react-router-dom";
import AddContact from "./components/AddContact";
import EditContact from "./components/EditContact";
import Home from "./components/Home";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add" element={<AddContact />} />
      <Route path="/edit" element={<EditContact />} />
    </Routes>
  );
};

export default MainRoutes;
