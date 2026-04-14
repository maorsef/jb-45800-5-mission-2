import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-inner">
        <div className="logo">Weather</div>

        <div className={`nav-links ${open ? "open" : ""}`}>
          <NavLink to="/" onClick={() => setOpen(false)}>בית</NavLink>
          <NavLink to="/history" onClick={() => setOpen(false)}>היסטוריה</NavLink>
          <NavLink to="/favorites" onClick={() => setOpen(false)}>מועדפים</NavLink>
          <NavLink to="/about" onClick={() => setOpen(false)}>אודות</NavLink>
        </div>

        <div className="menu-btn" onClick={() => setOpen(!open)}>
          ☰
        </div>
      </div>
    </div>
  );
};

export default Navbar;