import RecipeCard from "./RecipeCard.jsx";

export default function RecipesLibrary({ recipes }) {
  return (
    <div className="gallery">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} {...recipe} />
      ))}
    </div>
  );
}

// <div className="grid grid-cols-1 gap-4 justify-items-center md:grid-cols-[_minmax(175px,_1fr)]">
//

// <div className="grid grid-cols-1 gap-4 justify-items-center md:grid-cols-2">
//
// <div className="flex flex-col items-center gap-4 md:flex-row md:flex-wrap">
