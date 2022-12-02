import { Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../data/data";
import styles from "./Planets.module.css";
import Nav from "../components/Nav";
const images = import.meta.glob("../assets/planet-venus.svg*");

const Planets = () => {
  const { planetId } = useParams();
  const [planet, setPlanet] = useState([]);
  const [image, setImage] = useState("geology");
  //   const [image, setImages] = useState("planet");
  //   const [planetData, setPlanetData] = useState(
  //     data.filter((planet) => {
  //       console.log(planet.name);
  //     })
  //   );
  const [text, setText] = useState("overview");
  console.log(planet[0]);
  const setData = () => {
    setPlanet(data.filter((item) => item.name === planetId));
  };

  function getImgUrl(fileName) {
    const imgUrl = new URL(`../assets/${fileName}`, import.meta.url).href;
    return imgUrl;
  }

  useEffect(() => {
    setData();
  }, [planetId]);
  return (
    <div className={styles.planet}>
      <Grid container>
        <Grid
          item
          xs={12}
          lg={8}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className={styles.imageRelCont}>
            {/* <img
              className={styles.bigImage}
              src={
                image === "internal"
                  ? `planet-${planetId.toLowerCase()}-internal.svg`
                  : `planet-${planetId.toLowerCase()}.svg`
              }
            /> */}
            <img
              className={styles.bigImage}
              src={getImgUrl(
                image === "internal"
                  ? `planet-${planetId.toLowerCase()}-internal.svg`
                  : `planet-${planetId.toLowerCase()}.svg`
              )}
              alt="picture"
            />
            {image === "geology" && (
              <img
                src={getImgUrl(`geology-${planetId.toLowerCase()}.png`)}
                className={styles.smallImage}
              />
            )}
          </div>
        </Grid>
        <Grid item xs={12} lg={4} sx={{ mt: "30px" }} direction="row">
          <Grid container>
            <Grid item xs={12} md={6} lg={12}>
              <div className={styles.textCont}>
                <h3 className={styles.title}>{planet[0]?.name}</h3>
                <p className={styles.description}>
                  {planet[0] && planet[0][text].content}
                </p>
                <p className={styles.linkCont}>
                  <span className={styles.descriptionSpan}>source</span>
                  <a
                    href={planet[0] && planet[0][text].source}
                    target="blank"
                    className={styles.descriptionLink}
                  >
                    Wikipedia
                  </a>
                </p>
              </div>
            </Grid>
            <Grid item xs={12} md={6} lg={12}>
              <div className={styles.butCont}>
                <div
                  className={styles.button}
                  style={
                    text === "overview"
                      ? { backgroundColor: planet[0] && planet[0].color }
                      : {}
                  }
                  onClick={() => {
                    setText("overview");
                    setImage("overview");
                  }}
                >
                  01 overview
                </div>
                <div
                  className={styles.button}
                  style={
                    text === "structure"
                      ? { backgroundColor: planet[0] && planet[0].color }
                      : {}
                  }
                  onClick={() => {
                    setText("structure");
                    setImage("internal");
                  }}
                >
                  02 Internal Structure
                </div>
                <div
                  className={styles.button}
                  style={
                    text === "geology"
                      ? { backgroundColor: planet[0] && planet[0].color }
                      : {}
                  }
                  onClick={() => {
                    setText("geology");
                    setImage("geology");
                  }}
                >
                  03 Surface Geology
                </div>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <div className={styles.detailsCont}>
        <div className={styles.detail}>
          <span className={styles.detailSpan}>ROTATION TIME</span>
          <h4 className={styles.detailTitle}>
            {planet[0] && planet[0].rotation}
          </h4>
        </div>
        <div className={styles.detail}>
          <span className={styles.detailSpan}>REVOLUTION TIME</span>
          <h4 className={styles.detailTitle}>
            {planet[0] && planet[0].revolution}
          </h4>
        </div>
        <div className={styles.detail}>
          <span className={styles.detailSpan}>radius</span>
          <h4 className={styles.detailTitle}>
            {planet[0] && planet[0].radius}
          </h4>
        </div>
        <div className={styles.detail}>
          <span className={styles.detailSpan}>AVERAGE TEMP.</span>
          <h4 className={styles.detailTitle}>
            {planet[0] && planet[0].temperature}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Planets;
