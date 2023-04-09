import Search from "/src/components/Search.jsx";
import RecipeCard from "/src/components/RecipeCard.jsx";

export default function Recipes() {
  return (
    <div className="recipes">
      <h1 className="text-xl text-dark">Recipes</h1>
      <Search/>
      <RecipeCard />
      
    </div>
  );
}
