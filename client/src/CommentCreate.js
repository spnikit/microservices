import React, { useState } from "react";
import axios from "axios";

function CommentCreate({ postId }) {
  const [content, setContent] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    await axios.post(`http://posts.com/posts/${postId}/comments`, {
      content,
    });

    setContent("");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="comment">New Comment</label>
          <input
            value={content}
            onChange={({ target }) => setContent(target.value)}
            className="form-control"
            id="comment"
            type="text"
          />
        </div>
        <button className="btn btn-info" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default CommentCreate;
