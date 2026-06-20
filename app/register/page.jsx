"use client";

import { useState } from "react";
import "../../components/verbattle/Register.css";
import Header from "../../components/verbattle/Header";
import Footer from "../../components/verbattle/Footer";
import Register from "../../components/verbattle/Register";
import { footerData, navLinks } from "../../components/verbattle/data";

export default function RegisterPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="vb">
      <Header menuOpen={menuOpen} navLinks={navLinks} setMenuOpen={setMenuOpen} />
      <Register />
      <Footer footerData={footerData} navLinks={navLinks} />
    </div>
  );
}
