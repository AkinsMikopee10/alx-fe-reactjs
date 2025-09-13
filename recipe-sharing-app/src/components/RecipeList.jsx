import { useRecipeStore } from "./recipeStore";
import { Link } from "react-router-dom";

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div>
      {recipes.length === 0 ? (
        <p>No recipes yet. Add one!</p>
      ) : (
        recipes.map((recipe) => (
          <div
            key={recipe.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              margin: "10px 0",
            }}
          >
            <Link
              to={`/recipe/${recipe.id}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <h3>{recipe.title}</h3>
              <p>{recipe.description.slice(0, 50)}...</p>
            </Link>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;
