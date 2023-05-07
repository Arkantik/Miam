import RecipeCard from "./RecipeCard.jsx";

export default function RecipesLibrary({
  recipes,
  handleFavorite,
  handleRating,
}) {
  return (
    <div className="recipes__gallery">
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          recipe={recipe}
          handleFavorite={handleFavorite}
          handleRating={handleRating}
        />
      ))}
    </div>
  );
}
