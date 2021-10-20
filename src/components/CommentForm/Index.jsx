import React, { useContext, useState } from "react";
import Container from "./Container.jsx";
import UserContext from "../userContext.jsx";
import PropTypes from "prop-types";
import { useHistory, useParams } from "react-router-dom";
import StyledButton from "../Shared/Button.jsx";

function CommentForm(props) {
  const history = useHistory();
  const { id: postId } = useParams();

  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user) history.push("/login");
    else {
      const jwt = localStorage.getItem("token");
      fetch(`https://afternoon-cliffs-13118.herokuapp.com/comments/${postId}`, {
        headers: {
          Authorization: `bearer ${jwt}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          postId,
          comment,
        }),
      })
        .then((resp) => resp.json())
        .then((res) => {
          if (!res.error) {
            props.setComments((old) => [
              ...old,
              {
                userId: {
                  username: user,
                },
                comment,
              },
            ]);
            setComment("");
          }
        });
    }
  };

  const { user } = useContext(UserContext);
  return (
    <form onSubmit={handleSubmit}>
      <Container>
        {user ? (
          <input
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
            type="text"
          />
        ) : (
          <input type="text" disabled placeholder="login to post comments" />
        )}
        {user ? (
          <StyledButton>Add</StyledButton>
        ) : (
          <StyledButton>Login</StyledButton>
        )}
      </Container>
    </form>
  );
}

CommentForm.propTypes = {
  setComments: PropTypes.func,
};

export default CommentForm;
