import React, { useContext, useState } from "react";
import Container from "./Container.jsx";
import UserContext from "../userContext.jsx";
import { useHistory, useParams } from "react-router-dom";

function CommentForm() {
  const history = useHistory();
  const { id: postId } = useParams();

  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user) history.push("/login");
    else {
      const jwt = localStorage.getItem("token");
      fetch(`http://localhost:3000/comments/${postId}`, {
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
            location.reload();
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
        {user ? <button>Add</button> : <button>Login</button>}
      </Container>
    </form>
  );
}

export default CommentForm;
