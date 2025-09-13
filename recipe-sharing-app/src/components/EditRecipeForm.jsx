import { useState } from "react";
import { useRecipeStore } from "./recipeStore";

const EditRecipeForm = ({ recipe, onClose }) => {
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) {
      alert("Both title and description are required.");
      return;
    }
    updateRecipe(recipe.id, { title, description });
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: "10px" }}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
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
        style={{
          display: "block",
          marginBottom: "10px",
          width: "100%",
          padding: "8px",
        }}
      />
      <button
        type="submit"
        style={{ marginRight: "10px", padding: "6px 12px" }}
      >
        Save
      </button>
      <button type="button" onClick={onClose} style={{ padding: "6px 12px" }}>
        Cancel
      </button>
    </form>
  );
};

export default EditRecipeForm;
