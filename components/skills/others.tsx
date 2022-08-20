import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import { TbBrandNextjs } from "react-icons/tb";
import { ISkillComponentProps } from "../../types";

const Others = ({ currentDiv, setCurrentDiv, idx }: ISkillComponentProps) => {
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
				<span className="font-primary-regular text-white text-lg">Others</span>
				{currentDiv === idx ? (
					<AiOutlineArrowUp size={20} className="text-white" />
				) : (
					<AiOutlineArrowDown size={20} className="text-white" />
				)}
			</div>
			{currentDiv === idx && (
				<div className="bg-transparent border-2 border-primary flex gap-x-8 gap-y-3 flex-wrap items-center justify-center p-6">
					<div className="flex flex-col items-center justify-center gap-2">
						<TbBrandNextjs size={40} className="text-black dark:text-white" />
						<span>Next</span>
					</div>
				</div>
			)}
		</div>
	);
};

export default Others;
