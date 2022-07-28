import { useState } from "react";
import Backend from "./backend";
import Frontend from "./frontend";
import Others from "./others";
import Programming from "./programming";

const Skills = () => {
	const [currentDiv, setCurrentDiv] = useState<number>(0);

	return (
		<section className="section" id="skills">
			<h1>Skills</h1>
			<p className="mt-6 mb-20">
				Here are some of the skills that I have gained from my journey
			</p>
			<section className="max-w-2xl w-full mx-auto">
				<Programming currentDiv={currentDiv} setCurrentDiv={setCurrentDiv} idx={1} />
				<Frontend currentDiv={currentDiv} setCurrentDiv={setCurrentDiv} idx={2} />
				<Backend currentDiv={currentDiv} setCurrentDiv={setCurrentDiv} idx={3} />
				<Others currentDiv={currentDiv} setCurrentDiv={setCurrentDiv} idx={4} />
			</section>
		</section>
	);
};

export default Skills;
