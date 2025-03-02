/* eslint-disable no-unused-vars */
import React, { useState } from "react";
// import style from './Layout.module.css'
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import NavbarAfterAuth from "../navbarAfterAuth/NavbarAfterAuth";
export default function Layout() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

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
