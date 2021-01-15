import { Fragment, useState } from "react";

const showcase = () => {
  const [open, setOpen] = useState(false);
  // const menuToggle = document.querySelector(".toggle");
  // const showcase = document.querySelector(".showcase");

  // if (menuToggle) {
  //   menuToggle.addEventListener("click", () => {
  //     menuToggle.classList.toggle("active");
  //     showcase.classList.toggle("active");
  //   });
  // }

  return (
    <Fragment>
      <section className="showcase">
        <header>
          <h2 className="logo">Aron Hayes Davidson</h2>
          <div className="toggle"></div>
        </header>
        <video
          src="https://www.pexels.com/video/aerial-view-of-beautiful-resort-2169880"
          muted
          loop
          autoplay
        />
        <div className="overlay" />
        <div className="text">
          <h2>Never Stop</h2>
          <h3>Exploring The World</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod.
          </p>
          <a href="#">Projects</a>
        </div>
        <ul className="social">
          <li>
            <a href="#">
              <img src="https://i.ibb.co/x7P24fL/facebook.png" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="https://i.ibb.co/Wnxq2Nq/twitter.png" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="https://i.ibb.co/ySwtH4B/instagram.png" />
            </a>
          </li>
        </ul>
      </section>
    </Fragment>
  );
};

export default showcase;
