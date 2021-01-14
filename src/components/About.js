import { Fragment, useState, useEffect } from "react";
import Markdown from "markdown-to-jsx";
import aboutMarkdown from "../copy/about.md";
import useFetchFile from "./useFetchFile";

const About = () => {
  // const [html, setHtml] = useState("");

  // useEffect(() => {
  //   fetch(aboutMarkdown)
  //     .then((res) => res.text())
  //     .then((html) => {
  //       setHtml(html);
  //     });
  // });

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
