import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import { SiJavascript, SiTypescript, SiCplusplus } from "react-icons/si";
import { ISkillComponentProps } from "../../types";

const Programming = ({ currentDiv, setCurrentDiv, idx }: ISkillComponentProps) => {
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
				<span className="font-primary-regular text-white text-lg">Programming</span>
				{currentDiv === idx ? (
					<AiOutlineArrowUp size={20} className="text-white" />
				) : (
					<AiOutlineArrowDown size={20} className="text-white" />
				)}
			</div>
			{currentDiv === idx && (
				<div className="bg-transparent border-2 border-primary flex gap-x-8 gap-y-3 flex-wrap items-center justify-center p-6">
					<div className="flex flex-col items-center justify-center gap-2">
						<SiJavascript size={40} className="text-yellow-300" />
						<span>Javascript</span>
					</div>
					<div className="flex flex-col items-center justify-center gap-2">
						<SiTypescript size={40} className="text-blue-700" />
						<span>Typescript</span>
					</div>
					<div className="flex flex-col items-center justify-center gap-2">
						<SiCplusplus size={40} className="text-blue-600" />
						<span>C&#x2b;&#x2b;</span>
					</div>
				</div>
			)}
		</div>
	);
};

export default Programming;
