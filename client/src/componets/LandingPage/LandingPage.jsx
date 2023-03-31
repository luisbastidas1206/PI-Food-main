import React from "react";
import { NavLink } from "react-router-dom";
import style from "./LandingPage.module.css";

export default function LandingPage(props) {
  return (
    <div >
      <div className={style.landing}>
      <div className={style.fondo}>
        <div >
          <h1>L'art de bien manger</h1>
        </div>
        <NavLink to="/home">
          <button type="submit">Commencer</button>
        </NavLink>
      </div>
      </div>
    </div>
  );
}
