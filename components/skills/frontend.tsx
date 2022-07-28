import { SkillDivisionTypes } from "./skillDivTypes";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import { SiReact, SiMaterialui, SiTailwindcss, SiSass } from "react-icons/si";

const Frontend = ({ currentDiv, setCurrentDiv, idx }: SkillDivisionTypes) => {
	const handleAccordion = () => {
		currentDiv === idx
			? setCurrentDiv(previousValue => 0)
			: setCurrentDiv(previousValue => idx);
	};

	return (
		<div>
			<div
				className="flex justify-between items-center px-4 sm:px-6 py-2 bg-primary cursor-pointer"
				onClick={handleAccordion}
			>
				<span className="font-primary-regular text-white text-lg">Frontend</span>
				{currentDiv === idx ? (
					<AiOutlineArrowUp size={20} className="text-white" />
				) : (
					<AiOutlineArrowDown size={20} className="text-white" />
				)}
			</div>
			{currentDiv === idx && (
				<div className="bg-transparent border-2 border-primary flex gap-x-8 gap-y-3 flex-wrap items-center justify-center p-6">
					<div className="flex flex-col items-center justify-center gap-2">
						<SiReact size={40} className="text-blue-400" />
						<span>React</span>
					</div>
					<div className="flex flex-col items-center justify-center gap-2">
						<SiSass size={40} className="text-pink-600" />
						<span>SASS</span>
					</div>
					<div className="flex flex-col items-center justify-center gap-2">
						<SiMaterialui size={40} className="text-blue-500" />
						<span>Material UI</span>
					</div>
					<div className="flex flex-col items-center justify-center gap-2">
						<SiTailwindcss size={40} className="text-blue-400" />
						<span>Tailwind CSS</span>
					</div>
				</div>
			)}
		</div>
	);
};

export default Frontend;
