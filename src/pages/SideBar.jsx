import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SideBar.module.css";
import data from "../data/data";
const SideBar = () => {
  const navigate = useNavigate();

  const sideBar = data.map((planet) => {
    console.log(planet);
    return (
      <div
        key={planet.name}
        onClick={() => navigate(`/${planet.name}`)}
        className={styles.singleDiv}
      >
        <div
          style={{ backgroundColor: planet.color }}
          className={styles.circle}
        ></div>
        <h2 className={styles.title}>{planet.name}</h2>
      </div>
    );
  });
  console.log(sideBar);
  return <div className={styles.sideBar}>{sideBar}</div>;
};

export default SideBar;
