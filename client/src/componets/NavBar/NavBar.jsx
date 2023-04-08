import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";
import style from "./NavBar.module.css";

export default function NavBar(props) {


  return (
    <div className={style.nav}>
      <Link to="/home">
        <button>Home</button>
      </Link>
      <Link to="/">
        <button>Landing</button>
      </Link>
      <Link to="/abaut">
        <button>Abaut</button>
      </Link>
      <Link to= "creating">
        <button>Create Foot</button>
      </Link>

      <SearchBar/>
    </div>
  );
}
