import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";
import data from "../data/data";

const Nav = () => {
  const navLinks = data.map((planet) => (
    <NavLink key={planet.name} to={`./${planet.name}`} className={styles.links}>
      {planet.name}
    </NavLink>
  ));
  return (
    <div className={styles.navContainer}>
      <h2 className={styles.navTitle}>The Planets</h2>
      <div className={styles.navLinks}>{navLinks}</div>
    </div>
  );
};

export default Nav;
