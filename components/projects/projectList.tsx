import { projects } from "./projectType";

const ProjectList = () => {
	return (
		<div className="flex flex-col gap-24">
			{projects.map((project, idx) => (
				<article
					key={idx}
					className="flex flex-col lg:flex-row group lg:items-center justify-center gap-12"
				>
					<h2 className="lg:hidden">{project.title}</h2>
					{project.image ? (
						<img
							src={project.image}
							alt={project.title}
							className="w-full max-w-sm max-h-96 shadow-xl group-even:lg:order-1"
						/>
					) : (
						<div className="w-full max-w-sm h-[14em] shadow-xl group-even:order-1 flex items-center justify-center bg-gray-600">
							<h2>Image unavailable</h2>
						</div>
					)}
					<div className="group-odd:lg:text-right group-even:text-left flex gap-4 flex-col justify-center">
						<h2 className="hidden lg:block">{project.title}</h2>
						<p className="max-w-[45ch] group-odd:lg:ml-auto group-even:mr-auto mb-2">
							{project.description}
						</p>
						<h3 className="text-lg sm:text-xl font-primary-semibold text-light-subtitle dark:text-dark-subtitle">
							Frameworks used
						</h3>
						<ul className="flex items-center group-odd:lg:justify-end group-even:justify-start gap-x-8 gap-y-2 flex-wrap">
							{project.frameworks.map((framework, idx) => (
								<li
									key={idx}
									className="text-light-description dark:text-dark-description"
								>
									{framework}
								</li>
							))}
						</ul>
						{project.link ? (
							<a
								href={project.link}
								rel="noopener noreferrer"
								target="_blank"
								className="primary-button mt-4 group-odd:lg:ml-auto group-even:mr-auto scale-90"
							>
								Visit website
							</a>
						) : (
							<button
								type="button"
								className="disabled-button mt-4 group-odd:lg:ml-auto group-even:mr-auto scale-90"
								disabled={true}
							>
								On Progress
							</button>
						)}
					</div>
				</article>
			))}
		</div>
	);
};

export default ProjectList;
