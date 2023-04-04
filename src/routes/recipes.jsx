import Navbar from "/src/components/Navbar.jsx";
import RecipeCard from "/src/components/RecipeCard.jsx";

const Recipes = () => {
  return (
    <div className="recipes">
      <Navbar />
      <h1>Recipes</h1>
      <RecipeCard />
    </div>
  );
};

export default Recipes;
