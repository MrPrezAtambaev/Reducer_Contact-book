import React from "react";
import Navbar from "./components/Navbar";
import ContactContextProvider from "./ContactContext";
import MainRoutes from "./MainRoutes";

const App = () => {
  return (
    <>
      <ContactContextProvider>
        <Navbar />
        <MainRoutes />
      </ContactContextProvider>
    </>
  );
};

export default App;
