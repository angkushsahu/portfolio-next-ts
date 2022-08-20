import { aboutList } from "./data";

const About = () => {
	return (
		<section className="section" id="about">
			<h1>More About Me</h1>
			<p className="mt-6 mb-20">Want to know more about me, here we go</p>
			<div className="flex flex-col gap-12">
				{aboutList.map((about, idx) => (
					<div key={idx} className="odd:ml-auto w-fit">
						<h3 className="mb-4 text-light-subtitle dark:text-dark-subtitle text-lg sm:text-xl font-primary-semibold">
							{about.title}
						</h3>
						<p>{about.description}</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default About;
