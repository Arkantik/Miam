import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import Search from "../components/Search.jsx";
import RecipesLibrary from "../components/RecipesLibrary";

import recipesFakeData from "../data/data-recipes";

export default function Recipes() {
  const [recipes, setRecipes] = useState([]);

  // create unique ID prior to using fake recipes datas
  useEffect(() => {
    const newRecipes = recipesFakeData.map((recipe) => ({
      ...recipe,
      id: uuidv4(),
    }));
    setRecipes(newRecipes);
  }, []);

  const handleFavorite = (id) => {
    const clonedRecipes = [...recipes];
    const updatedRecipes = clonedRecipes.map((recipe) =>
      recipe.id === id ? { ...recipe, favorite: !recipe.favorite } : recipe
    );
    setRecipes(updatedRecipes);
  };

  const handleRating = (id, rating) => {
    const clonedRecipes = [...recipes];
    const updatedRecipes = clonedRecipes.map((recipe) =>
      recipe.id === id ? { ...recipe, rating } : recipe
    );
    setRecipes(updatedRecipes);
  };

  return (
    <section className="recipes__library space-y-4">
      <h2 className="text-xl">My Recipes Library</h2>
      <Search />
      <RecipesLibrary
        recipes={recipes}
        handleFavorite={handleFavorite}
        handleRating={handleRating}
      />
    </section>
  );
}
