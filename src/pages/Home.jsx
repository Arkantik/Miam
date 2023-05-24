import Carousel from "../components/Home/Carousel";
import RecipeDay from "../components/Home/RecipeDay";

export default function Home() {
	return (
		<section className="space-y-8">
			<Carousel />
			<RecipeDay />
		</section>
	);
}
