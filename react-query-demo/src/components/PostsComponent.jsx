import React from "react";
import { useQuery } from "@tanstack/react-query";

// Fetch posts from the API
const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }
  return response.json();
};

function PostsComponent() {
  // useQuery returns helpful values including refetch
  const { data, isLoading, isError, error, refetch, isFetching } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    staleTime: 1000 * 60, // cache stays "fresh" for 1 minute
  });

  // Loading state
  if (isLoading) {
    return <p>Loading posts...</p>;
  }

  // Error state
  if (isError) {
    return <p style={{ color: "red" }}>Error: {error.message}</p>;
  }

  // Success state — render posts
  return (
    <div style={{ maxWidth: "600px", margin: "20px auto" }}>
      <h2>Posts from JSONPlaceholder</h2>

      {/* Refetch Button */}
      <button
        onClick={() => refetch()}
        style={{
          background: "#007bff",
          color: "white",
          border: "none",
          padding: "8px 12px",
          borderRadius: "5px",
          cursor: "pointer",
          marginBottom: "15px",
        }}
      >
        {isFetching ? "Refreshing..." : "Refetch Posts"}
      </button>

      <ul>
        {data.slice(0, 10).map((post) => (
          <li key={post.id} style={{ marginBottom: "10px" }}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;
