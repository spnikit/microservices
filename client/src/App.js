import React from "react";
import PostCreate from "./PostCreate";
import PostList from "./PostList";

function App() {
  return (
    <div className="container">
      <PostCreate />
      <hr />
      <h2>Posts List</h2>
      <PostList />
    </div>
  );
}

export default App;
