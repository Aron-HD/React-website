import { Fragment } from "react";
import Markdown from "markdown-to-jsx";
import technologiesMarkdown from "../../copy/technologies.md";
import useFetchFile from "../useFetchFile";

const Technologies = () => {
  const { data: html, isPending, error } = useFetchFile(technologiesMarkdown);

  return (
    <Fragment>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {html && <Markdown className="technologies" children={html} />}
    </Fragment>
  );
};

export default Technologies;
