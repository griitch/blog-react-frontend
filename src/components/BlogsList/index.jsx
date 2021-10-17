import React from "react";
import uniqid from "uniqid";
import Container from "./Container.jsx";
import { capitalize } from "lodash";
import BlogListItem from "./BlogListItem.jsx";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch.jsx";

function Blogs() {
  const { data: blogs, loading } = useFetch("http://localhost:3000/posts");

  return loading ? (
    <h1>loading...</h1>
  ) : (
    <Container>
      {blogs.map((blog) => {
        return (
          <BlogListItem key={uniqid()}>
            <Link to={`/posts/${blog._id}`}>{capitalize(blog.title)}</Link>
            <h4>Posted : {new Date(blog.createdAt).toDateString()}</h4>
            {blog.keywords.length > 0 && (
              <h4>keywords : {blog.keywords.toString()}</h4>
            )}
            <p>{blog.description}</p>
          </BlogListItem>
        );
      })}
    </Container>
  );
}

export default Blogs;
