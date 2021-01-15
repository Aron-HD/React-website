import Thumbnail from "./Thumbnail.js"; // Import the Thumbnail component

const Projects = (props) => {
  return (
    // Render a Thumbnail component
    <div>
      <h1>Projects</h1>
      <Thumbnail
        link="{ props.link }"
        image="{ props.image }"
        title="{ props.title }"
        category="{ props.category }"
      />
    </div>
  );
};

export default Projects;
