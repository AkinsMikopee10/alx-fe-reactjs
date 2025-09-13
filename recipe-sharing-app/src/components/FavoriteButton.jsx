import { useRecipeStore } from "./recipeStore";

const FavoriteButton = ({ recipeId }) => {
  const favorites = useRecipeStore((state) => state.favorites);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  const isFavorite = favorites.includes(recipeId);

  const handleClick = () => {
    if (isFavorite) removeFavorite(recipeId);
    else addFavorite(recipeId);
  };

  return (
    <button
      onClick={handleClick}
      style={{
        background: isFavorite ? "gold" : "#eee",
        color: isFavorite ? "black" : "#333",
        padding: "6px 12px",
        marginTop: "10px",
        border: "none",
        cursor: "pointer",
      }}
    >
      {isFavorite ? "★ Remove Favorite" : "☆ Add Favorite"}
    </button>
  );
};

export default FavoriteButton;
