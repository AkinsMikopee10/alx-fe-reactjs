import React from "react";
import { useParams } from "react-router-dom";

function Post() {
  const { id } = useParams();

  return (
    <div>
      <h2>Blog Post ID: {id}</h2>
      <p>This is a dynamically loaded blog post based on the URL parameter.</p>
    </div>
  );
}

export default Post;
