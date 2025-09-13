import { useState } from "react";
import { useRecipeStore } from "./recipeStore";
import EditRecipeForm from "./EditRecipeForm";
import DeleteRecipeButton from "./DeleteRecipeButton";
import FavoriteButton from "./FavoriteButton";

const RecipeDetails = ({ recipeId }) => {
  const recipe = useRecipeStore((state) =>
    state.recipes.find((recipe) => recipe.id === recipeId)
  );
  const [isEditing, setIsEditing] = useState(false);

  if (!recipe) return <p>Recipe not found.</p>;

  return (
    <div
      style={{ border: "1px solid #ccc", padding: "20px", margin: "20px 0" }}
    >
      {isEditing ? (
        <EditRecipeForm recipe={recipe} onClose={() => setIsEditing(false)} />
      ) : (
        <>
          <h1>{recipe.title}</h1>
          <p>{recipe.description}</p>
          <FavoriteButton recipeId={recipe.id} />
          <div style={{ marginTop: "10px" }}>
            <button
              onClick={() => setIsEditing(true)}
              style={{ marginRight: "10px" }}
            >
              Edit
            </button>
            <DeleteRecipeButton recipeId={recipe.id} />
          </div>
        </>
      )}
    </div>
  );
};

export default RecipeDetails;
