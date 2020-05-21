import { useState } from "react";
import axios from "axios";

export function useFetchPost(defaultValForPosts = {}) {
  const [posts, setPosts] = useState(defaultValForPosts);

  const fetchPosts = async () => {
    const resp = await axios.get("http://posts.com/posts");

    setPosts(resp.data);
  };

  return { posts, fetchPosts };
}
