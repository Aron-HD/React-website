import { Link } from "react-router-dom";
import img1 from "../../images/cmsbot-gui-input.JPG";
// import img2 from "../../images/convert-articles.jpg";
import img3 from "../../images/dupe-tool.JPG";
import img4 from "../../images/landing-pages-cmsbot.jpg";
import styled from "styled-components";

const StyledThumbnails = styled.div``;

const Thumbnails = () => {
  return (
    <StyledThumbnails className="projects">
      <div className="project-preview">
        <Link to="/projects/">
          <div className="project-image">
            <img src={img1} alt="Thumbnail" />
          </div>
          <label className="project-title">Title</label>
        </Link>
      </div>
      <div className="project-preview">
        <Link to="/projects/">
          <div className="project-image">
            {/* <img src={img2} alt="Thumbnail" /> */}
          </div>
          <label className="project-title">Title</label>
        </Link>
      </div>
      <div className="project-preview">
        <Link to="/projects/">
          <div className="project-image">
            <img src={img3} alt="Thumbnail" />
          </div>
          <label className="project-title">Title</label>
        </Link>
      </div>
      <div className="project-preview">
        <Link to="/projects/">
          <div className="project-image">
            <img src={img4} alt="Thumbnail" />
          </div>
          <label className="project-title">Title</label>
        </Link>
      </div>
    </StyledThumbnails>
  );
};

export default Thumbnails;
