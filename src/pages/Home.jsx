import Carousel from "../components/Home/Carousel";

export default function Home() {
	return (
		<section className="space-y-8">
			<h2 className="text-xl">Last Recipes</h2>
			<Carousel />
			<h2 className="text-xl">Recipe of the day</h2>
		</section>
	);
}
