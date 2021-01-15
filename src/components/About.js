import { Fragment } from "react";
import Markdown from "markdown-to-jsx";
import aboutMarkdown from "../copy/about.md";
import useFetchFile from "./useFetchFile";

const About = () => {
  const { data: html, isPending, error } = useFetchFile(aboutMarkdown);

  return (
    <Fragment>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {html && <Markdown className="about" children={html} />}
    </Fragment>
  );
};

export default About;
