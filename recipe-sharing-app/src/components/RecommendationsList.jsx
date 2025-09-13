import { useEffect } from "react";
import { useRecipeStore } from "./recipeStore";
import { Link } from "react-router-dom";

const RecommendationsList = () => {
  const recommendations = useRecipeStore((state) => state.recommendations);
  const generateRecommendations = useRecipeStore(
    (state) => state.generateRecommendations
  );

  useEffect(() => {
    generateRecommendations(); // only runs on mount
  }, [generateRecommendations]);

  if (recommendations.length === 0) return <p>No recommendations yet.</p>;

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>Recommended for You</h2>
      {recommendations.map((recipe) => (
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

export default RecommendationsList;
