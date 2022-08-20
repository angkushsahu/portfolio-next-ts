import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import { SiExpress, SiMongodb, SiNodedotjs } from "react-icons/si";
import { ISkillComponentProps } from "../../types";

const Backend = ({ currentDiv, setCurrentDiv, idx }: ISkillComponentProps) => {
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
				<span className="font-primary-regular text-white text-lg">Backend</span>
				{currentDiv === idx ? (
					<AiOutlineArrowUp size={20} className="text-white" />
				) : (
					<AiOutlineArrowDown size={20} className="text-white" />
				)}
			</div>
			{currentDiv === idx && (
				<div className="bg-transparent border-2 border-primary flex gap-x-8 gap-y-3 flex-wrap items-center justify-center p-6">
					<div className="flex flex-col items-center justify-center gap-2">
						<SiNodedotjs size={40} className="text-green-700" />
						<span>Node</span>
					</div>
					<div className="flex flex-col items-center justify-center gap-2">
						<SiExpress size={40} className="text-black dark:text-white" />
						<span>Express</span>
					</div>
					<div className="flex flex-col items-center justify-center gap-2">
						<SiMongodb size={40} className="text-green-600" />
						<span>Mongo DB</span>
					</div>
				</div>
			)}
		</div>
	);
};

export default Backend;
