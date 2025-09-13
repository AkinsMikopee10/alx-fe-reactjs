import { useState } from "react";
import { useRecipeStore } from "./recipeStore";

const AddRecipeForm = () => {
  const addRecipe = useRecipeStore((state) => state.addRecipe);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!title.trim() || !description.trim()) {
      alert("Please enter both title and description.");
      return;
    }

    addRecipe({ id: Date.now(), title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        style={{
          display: "block",
          marginBottom: "10px",
          width: "100%",
          padding: "8px",
        }}
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        style={{
          display: "block",
          marginBottom: "10px",
          width: "100%",
          padding: "8px",
        }}
      />
      <button type="submit" style={{ padding: "8px 16px" }}>
        Add Recipe
      </button>
    </form>
  );
};

export default AddRecipeForm;
