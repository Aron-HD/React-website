import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";
import useFetch from "../useFetch";

const StyledBlog = styled.div`
  h2 {
    font-size: 20px;
    color: red;
    margin-bottom: 10px;
  }
  div {
    margin: 20px 0;
  }
  button {
    background: red;
    color: white;
    border: 0;
    padding: 8px;
    border-radius: 8px;
    cursor: pointer;
  }
`;

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, error, isPending } = useFetch(
    "http://localhost:8000/blogs/" + id
  );

  const history = useHistory();

  const handleClick = () => {
    fetch("http://localhost:8000/blogs/" + blog.id, {
      method: "DELETE",
    }).then(() => {
      //   setIsPending(false);
      history.push("/blogs");
    });
  };

  return (
    <StyledBlog className="blog-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleClick}>delete</button>
        </article>
      )}
    </StyledBlog>
  );
};

export default BlogDetails;
