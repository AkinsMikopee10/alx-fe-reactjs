import React from "react";
import { useRecipeStore } from "./recipeStore";

const SearchBar = () => {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      onChange={handleChange}
      style={{
        display: "block",
        width: "100%",
        padding: "8px",
        marginBottom: "20px",
        boxSizing: "border-box",
      }}
    />
  );
};

export default SearchBar;
