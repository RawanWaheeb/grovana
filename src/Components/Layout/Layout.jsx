/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import NavbarAfterAuth from "../navbarAfterAuth/NavbarAfterAuth";
export default function Layout() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <>
      {isAuthenticated ? <NavbarAfterAuth /> : <Navbar />}

      <div>
        <Outlet></Outlet>
      </div>
      <Footer />
    </>
  );
}
