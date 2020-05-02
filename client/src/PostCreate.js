import React from "react";
import { useState } from "react";

function PostCreate() {
  const [title, setTitle] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <div>
      <h1>Create Post</h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            onChange={({ target }) => setTitle(target.value)}
            value={title}
            className="form-control"
            type="text"
            id="title"
          ></input>
        </div>
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default PostCreate;
