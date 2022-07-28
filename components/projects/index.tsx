import ProjectList from "./projectList";

const Projects = () => {
	return (
		<section className="section" id="projects">
			<h1>Projects</h1>
			<p className="mt-6">Most of the projects I create are just for fun.</p>
			<p className="mt-1 mb-20">Here are some of the projects I am confident about.</p>
			<ProjectList />
		</section>
	);
};

export default Projects;
