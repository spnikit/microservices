import React from "react";

function CommentList({ comments }) {
  const renderedComments = comments.map(({ id, content }) => {
    return <li key={id}>{content}</li>;
  });

  return <ul>{renderedComments}</ul>;
}

export default CommentList;
