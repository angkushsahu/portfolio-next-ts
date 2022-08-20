import { Dispatch, SetStateAction } from "react";

export interface IAboutData {
	title: string;
	description: string;
}

export interface IContactValues {
	name: string;
	email: string;
	subject: string;
	message: string;
}

export interface IProject {
	title: string;
	description: string;
	link: string;
	frameworks: string[];
	image: string;
}

export interface IQualifications {
	title: string;
	role: string;
	description: string;
	time: string;
}

export interface ISkillComponentProps {
	currentDiv: number;
	setCurrentDiv: Dispatch<SetStateAction<number>>;
	idx: number;
}
