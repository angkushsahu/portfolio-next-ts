import { experienceMap } from "./data";

const Experience = () => {
	return (
		<section>
			<h2 className="text-center mb-3">Experience</h2>
			<h2 className="text-center mb-10">&lt; {experienceMap.length} Internship &gt;</h2>
			<div className="relative py-4 after:absolute after:top-0 after:bottom-0 medium:after:left-1/2 after:w-1 after:bg-primary after:z-[2] w-fit medium:w-full smaller:max-w-[44em] mx-auto">
				{experienceMap.map((edu, idx) => (
					<div
						key={idx}
						className="relative bg-primary px-5 py-3 rounded w-full max-w-[90%] smaller:max-w-[20em] medium:even:ml-auto medium:odd:text-right my-10 mx-6 medium:mx-0 after:absolute after:top-1/2 after:-translate-y-1/2 after:rotate-45 medium:odd:after:left-[calc(100%-0.5rem)] after:right-[calc(100%-0.5rem)] after:h-4 after:w-4 after:bg-primary before:absolute before:bg-white before:top-1/2 before:-translate-y-1/2 before:rounded-full before:z-[3] before:right-[calc(100%+0.9rem)] medium:odd:before:left-[calc(100%+1.6rem)] medium:before:right-[calc(100%+1.4rem)] before:w-4 before:h-4"
					>
						<h3 className="text-lg sm:text-xl text-white">{edu.title}</h3>
						{edu.role && (
							<span className="text-base sm:text-lg block mt-1 text-white">
								{edu.role}
							</span>
						)}
						<span className="block mt-3 text-gray-300">{edu.description}</span>
						<span className="block mt-3 text-gray-300">{edu.time}</span>
					</div>
				))}
			</div>
		</section>
	);
};

export default Experience;
