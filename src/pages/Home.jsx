import Carousel from "../components/Home/Carousel";
import RecipeDay from "../components/Home/RecipeDay";

export default function Home() {
	return (
		<section className="space-y-8">
			<h2 className="text-xl">Last Recipes</h2>
			<Carousel />
			<RecipeDay />
		</section>
	);
}
