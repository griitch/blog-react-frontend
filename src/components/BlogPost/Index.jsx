import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch.jsx";
import { capitalize } from "lodash";
import Container from "./Container.jsx";
import ReactMarkdown from "react-markdown";
import BlogHeader from "./BlogHeader.jsx";
import CommentsBox from "../CommentsBox/Index.jsx";
import CommentForm from "../CommentForm/Index.jsx";

function BlogPost() {
  const { id } = useParams();
  const { loading, data: blog } = useFetch(
    `http://localhost:3000/posts/${id}`,
    {}
  );

  const {
    loading: commentsLoading,
    data: comments,
    setData: setComments,
  } = useFetch(`http://localhost:3000/comments/${id}`, []);

  useEffect(() => {
    document.title = blog ? capitalize(blog.title) : "loading";
  }, [blog]);

  return (
    <Container>
      {loading ? (
        <h1>loading...</h1>
      ) : (
        <div>
          <BlogHeader>{capitalize(blog.title)}</BlogHeader>
          <ReactMarkdown>{blog.text}</ReactMarkdown>
          <hr />
          <h4>Comments : </h4>
          <CommentForm setComments={setComments} />
          {!commentsLoading && <CommentsBox comments={comments} />}
        </div>
      )}
    </Container>
  );
}

export default BlogPost;
