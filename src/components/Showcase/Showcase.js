import { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import NavAlt from "./NavAlt";

const Showcase = () => {
  return (
    <Fragment>
      <section className="showcase">
        <header>
          <NavAlt />
        </header>
        <video
          src="https://www.pexels.com/video/aerial-view-of-beautiful-resort-2169880"
          muted
          loop
          autoplay
        />
        <div className="overlay" />
        <div className="container">
          <div className="text">
            <h2>Never Stop</h2>
            <h3>Exploring The World</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod.
            </p>
            <a href="/projects">Projects</a>
          </div>
          <ul className="social">
            <li>
              <a href="mailto:aronhdavidson@gmail.com">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  style={{ color: "#fff" }}
                  size="3x"
                />
              </a>
            </li>
            <li>
              <a href="https://github.com/aron-hd">
                <FontAwesomeIcon
                  icon={faGithub}
                  style={{ color: "#fff" }}
                  size="3x"
                />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/aron-hd/">
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  style={{ color: "#fff" }}
                  size="3x"
                />
              </a>
            </li>
          </ul>
        </div>
      </section>
    </Fragment>
  );
};

export default Showcase;
