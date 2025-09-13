import { create } from "zustand";

// Zustand store for recipes
const useRecipeStore = create((set) => ({
  recipes: [],

  // Action to add a new recipe
  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),

  // Action to initialize the recipe list
  setRecipes: (recipes) => set({ recipes }),
}));

export default useRecipeStore;
