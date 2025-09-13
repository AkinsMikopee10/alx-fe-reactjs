import { create } from "zustand";

export const useRecipeStore = create((set) => ({
  // Existing state
  recipes: [],
  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),
  updateRecipe: (id, updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === id ? { ...recipe, ...updatedRecipe } : recipe
      ),
    })),
  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    })),
  setRecipes: (recipes) => set({ recipes }),

  // New state for search and filtering
  searchTerm: "",
  filteredRecipes: [],

  // Action to set the search term
  setSearchTerm: (term) => set({ searchTerm: term }),

  // Action to compute filtered recipes
  filterRecipes: () =>
    set((state) => ({
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      ),
    })),
}));
