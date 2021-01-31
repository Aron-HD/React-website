import { Fragment } from "react";
import { Link } from "react-router-dom";
import NavAlt from "./NavAlt";
import Video from "../../video/showcase_video.mp4";

const Showcase = () => {
  return (
    <section className="showcase">
      <header>
        <NavAlt />
      </header>
      <video src={Video} muted loop autoPlay />
      <div className="overlay" />
      <div className="container">
        <div className="text">
          <h3>Aron Hayes Davidson</h3>
          <p>
            Aspiring developer experienced in frontend and backend technologies
            looking to change career.
          </p>
          <Link to="/projects">Projects</Link>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
