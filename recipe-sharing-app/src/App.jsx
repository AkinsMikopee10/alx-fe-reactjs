import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from "react-router-dom";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <Router>
      <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
        <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
          Recipe Sharing App
        </h1>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SearchBar />
                <AddRecipeForm />
                <RecipeList />
              </>
            }
          />
          <Route path="/recipe/:id" element={<RecipeDetailsWrapper />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

// Wrapper to extract recipe ID from route params
const RecipeDetailsWrapper = () => {
  const { id } = useParams();
  const recipeId = parseInt(id, 10);
  return <RecipeDetails recipeId={recipeId} />;
};
