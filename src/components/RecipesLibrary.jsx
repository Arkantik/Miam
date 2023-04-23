import RecipeCard from "./RecipeCard.jsx";

export default function RecipesLibrary({ recipes, toggleFavoriteRecipe }) {
  return (
    <div className="gallery">
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          {...recipe}
          toggleFavoriteRecipe={toggleFavoriteRecipe}
        />
      ))}
    </div>
  );
}
