import React from "react";

function CommentList({ comments = [] }) {
  const renderedComments = comments.map(({ id, content, status }) => {
    let contentToRender;
    switch (status) {
      case "approved":
        contentToRender = content;
        break;
      case "pending":
        contentToRender = "This comment is awaiting moderation";
        break;
      case "rejected":
      default:
        contentToRender = "This comment has been rejected";
        break;
    }

    return <li key={id}>{contentToRender}</li>;
  });

  return <ul>{renderedComments}</ul>;
}

export default CommentList;
