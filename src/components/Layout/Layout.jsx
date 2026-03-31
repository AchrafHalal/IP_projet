import React from "react";
import Navbar from "../Navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <div className="app-wrapper">
      <Navbar />

      {/* Main content */}
      <main >
        {children}
      </main>

    </div>
  );
};

export default Layout;