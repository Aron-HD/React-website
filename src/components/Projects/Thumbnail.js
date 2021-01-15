import { Link } from "react-router-dom";

const Thumbnail = (link, image, title, category) => {
  return (
    <div className="project">
      <Link to={ link }>
        <div className="project-image">
          <img src={ image } alt="Project Image" />
        </div>
        <label className="project-title">{title}</label>
        <label className="project-category">{category}</label>
      </Link>
    </div>
  );
};

export default Thumbnail;
