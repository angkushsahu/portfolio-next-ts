import { Dispatch, SetStateAction } from "react";

export interface SkillDivisionTypes {
	currentDiv: number;
	setCurrentDiv: Dispatch<SetStateAction<number>>;
	idx: number;
}
