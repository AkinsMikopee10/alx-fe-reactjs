import { useMemo } from "react";
import { useRecipeStore } from "./recipeStore";
import { Link } from "react-router-dom";

const FavoritesList = () => {
  const favoritesIds = useRecipeStore((state) => state.favorites);
  const recipes = useRecipeStore((state) => state.recipes);

  // Memoize derived favorites to prevent infinite loop
  const favorites = useMemo(() => {
    return favoritesIds
      .map((id) => recipes.find((recipe) => recipe.id === id))
      .filter(Boolean);
  }, [favoritesIds, recipes]);

  if (favorites.length === 0) return <p>No favorite recipes yet.</p>;

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>My Favorites</h2>
      {favorites.map((recipe) => (
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
      ))}
    </div>
  );
};

export default FavoritesList;
