import Image from "next/image";
import { projects } from "./data";

const Project = () => {
	return (
		<div className="flex flex-wrap gap-10 items-center justify-center">
			{projects.map((project, idx) => (
				<div
					className="flex flex-col gap-24 bg-gray-300/70 dark:bg-slate-900/40 px-4 py-5 sm:px-8 sm:py-8 rounded max-w-lg shadow-lg"
					key={idx}
				>
					<article>
						<Image
							src={project.image}
							alt={project.title}
							width="512"
							height="255"
							placeholder="blur"
							blurDataURL="/images/programming.png"
							className="rounded shadow-lg"
						/>
						<h2 className="mt-5 sm:mt-8">{project.title}</h2>
						<p className="max-w-[45ch] my-4">{project.description}</p>
						<h3 className="text-lg sm:text-xl font-primary-semibold text-light-subtitle dark:text-dark-subtitle mb-2">
							Frameworks
						</h3>
						<div className="flex flex-wrap gap-x-6 gap-y-0">
							{project.frameworks.map((framework, idx) => (
								<span
									className="text-light-description dark:text-dark-description"
									key={idx}
								>
									{framework}
								</span>
							))}
						</div>
						<div className="flex flex-wrap justify-between mt-8">
							<a
								href={project.link}
								rel="noopener noreferrer"
								target="_blank"
								aria-label={project.title}
								title={project.title}
								className="primary-button py-2"
							>
								Go Live
							</a>
							<a
								href={project.github}
								rel="noopener noreferrer"
								target="_blank"
								aria-label={project.title}
								title={project.title}
								className="secondary-button py-2"
							>
								Github
							</a>
						</div>
					</article>
				</div>
			))}
		</div>
	);
};

export default Project;
