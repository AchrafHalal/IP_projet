import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/FooterPage";



const Layout = ({ children }) => {
    const isPrivacyPage = window.location.pathname === "/privacy" || window.location.pathname === "/terms" || window.location.pathname === "/refund";

  return (
    <div className={`app-wrapper ${isPrivacyPage ? "sticky-footer-layout" : ""}`}>
      <Navbar />

      {/* Main content */}
      <main >
        {children}
      </main>
      {/* Footer is only rendered on non-privacy pages */}
      {!isPrivacyPage && <Footer />}

    </div>
  );
};

export default Layout;