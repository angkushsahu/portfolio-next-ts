import { useState } from "react";
import Education from "./education";
import Experience from "./experience";

const EduAndExp = () => {
	const [tabs, setTabs] = useState<number>(1);

	return (
		<section className="section" id="experience">
			<h1>Qualifications</h1>
			<div className="flex items-center justify-center gap-0 smaller:gap-4 mt-12">
				<span
					className={`${
						tabs === 1 ? "primary-button" : "secondary-button"
					} scale-75 smaller:scale-90`}
					onClick={() => setTabs(previousValue => 1)}
				>
					Experience
				</span>
				<span
					className={`${
						tabs === 2 ? "primary-button" : "secondary-button"
					} scale-75 smaller:scale-90`}
					onClick={() => setTabs(previousValue => 2)}
				>
					Education
				</span>
			</div>
			<section className="mt-16">
				{tabs === 1 && <Experience />}
				{tabs === 2 && <Education />}
			</section>
		</section>
	);
};

export default EduAndExp;
