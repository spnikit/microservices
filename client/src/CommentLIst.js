import React, { useState, useEffect } from "react";
import axios from "axios";

function CommentList({ postId }) {
  const [comments, setComments] = useState([]);

  const fetchData = async () => {
    const res = await axios.get(
      `http://localhost:6001/posts/${postId}/comments`
    );

    setComments(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderedComments = comments.map(({ id, content }) => {
    return <li key={id}>{content}</li>;
  });

  return <ul>{renderedComments}</ul>;
}

export default CommentList;
