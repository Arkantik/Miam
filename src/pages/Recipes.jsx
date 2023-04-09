import Search from "../components/Search.jsx";
import RecipesLibrary from "../components/RecipesLibrary";

import recipes from "../data/data-recipes";

export default function Recipes() {
  return (
    <section className="space-y-4">
      <h2 className="text-xl">My Recipes Library</h2>
      <Search />
      <RecipesLibrary recipes={recipes} />
    </section>
  );
}
