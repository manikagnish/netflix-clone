import { useEffect, useState } from "react";
import "./Nav.css";

export default function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <a href="/">
        <img
          src="./images/netflix-logo.png"
          alt="netflix logo"
          className="nav__logo"
        />
      </a>
      <img
        src="./images/netflix-avatar.png"
        alt="netflix avatar"
        className="nav__avatar"
      />
    </div>
  );
}
