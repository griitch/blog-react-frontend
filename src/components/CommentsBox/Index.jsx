import React from "react";
import uniqid from "uniqid";
import PropTypes from "prop-types";
import Container from "./Container.jsx";

function CommentsBox({ comments }) {
  return (
    <Container>
      {comments.map((c) => (
        <p key={uniqid()}>
          <span>{c.userId.username} : </span>
          {c.comment}
        </p>
      ))}
    </Container>
  );
}

CommentsBox.propTypes = {
  comments: PropTypes.array,
};

export default CommentsBox;
