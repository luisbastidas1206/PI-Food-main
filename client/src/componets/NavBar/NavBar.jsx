import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";

export default function NavBar(props) {
  return (
    <div>
      <Link to="/home">
        <button>Home</button>
      </Link>
      <Link to="/">
        <button>Landing</button>
      </Link>
      <Link>
        <button>Abaut</button>
      </Link>
      <Link to= "creating">
        <button>Create Foot</button>
      </Link>
    </div>
  );
}
