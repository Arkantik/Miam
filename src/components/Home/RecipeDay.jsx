import recipesData from "../../data/data-recipes";
import Button from "../Button";

export default function RecipeDay({ handleViewMore }) {
	const { src, name, description } = recipesData[0];
	return (
		<section className="flex flex-col gap-8">
			<h2 className="text-xl">Recipe of the day</h2>
			<div className="flex justify-center">
				<div className="grid max-w-[1280px] grid-cols-[1fr_2fr] gap-8">
					<div className="">
						<img
							src={src}
							alt={name}
							className="max-h-[500px] w-full rounded-xl object-cover"
						/>
					</div>
					<div className="flex flex-col justify-between gap-4 overflow-hidden text-justify">
						<div className="flex flex-col gap-4">
							<h3 className="text-lg">{name}</h3>
							<p>{description}</p>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit.
								Laborum ipsa, libero eligendi, ullam voluptatum expedita
								laudantium eum sit totam autem distinctio maxime veniam nulla
								quidem perspiciatis blanditiis maiores hic explicabo itaque
								saepe fugit eos. Alias placeat, quam repellat atque cumque
								aspernatur illo sit. Laborum facere delectus necessitatibus
								pariatur quam ea fugiat quidem? Enim optio ipsam nulla fuga
								reprehenderit quibusdam, cum fugiat! Impedit, repudiandae.
								Aspernatur aut quo excepturi? <br />
								Itaque possimus quo, fugiat incidunt quis earum facere, nihil
								ullam fuga vitae omnis maxime odit, nemo repudiandae sunt
								laboriosam esse dolorum expedita aspernatur eius ea.
								Repellendus, corporis hic. Harum a vero ipsa exercitationem
								reprehenderit nulla amet rerum quia sapiente aliquid illo
								voluptatibus ab in optio dicta laboriosam ex, error quasi
								necessitatibus blanditiis omnis iusto
							</p>
						</div>
						<div className="flex justify-end">
							<Button
								onClick={() => handleViewMore()}
								customStyle="bg-secondary text-primary rounded-2xl px-4 py-1 hover:bg-primary hover:text-lightmode">
								View More
							</Button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
