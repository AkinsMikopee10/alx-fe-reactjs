import React from "react";
import { useParams } from "react-router-dom";

function BlogPost() {
  const { id } = useParams();

  return (
    <div>
      <h2>Blog Post ID: {id}</h2>
      <p>
        This is dynamically rendered blog content based on the URL parameter.
      </p>
    </div>
  );
}

export default BlogPost;
