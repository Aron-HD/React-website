import { Fragment } from "react";
import { useState, useEffect } from "react";
import Thumbnails from "./Thumbnails.js";
import Technologies from "./Technologies";
import useFetchFile from "../useFetchFile.js";

const Projects = () => {
  return (
    <Fragment>
      <h1>Projects</h1>
      <Thumbnails />
      <Technologies />
    </Fragment>
  );
};

export default Projects;
