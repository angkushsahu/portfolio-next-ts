export interface EduExpType {
	title: string;
	role: string;
	description: string;
	time: string;
}

export const educationMap: EduExpType[] = [
	{
		title: "Jorhat Engineering College",
		role: "Mechanical Engineering",
		description: "Jorhat, Assam",
		time: "2020 - 2024",
	},
	{ title: "Pragya Academy", role: "", description: "Jorhat, Assam", time: "2018 - 2020" },
	{
		title: "Spring Dale High School",
		role: "",
		description: "Jorhat, Assam",
		time: "2006 - 2018",
	},
];

export const experienceMap: EduExpType[] = [
	{
		title: "Feetwings",
		role: "Full - stack developer",
		description:
			"Worked as a full-stack developer, handled server-side user authentication in Express-Node, and created client-side components using NextJs-MaterialUI",
		time: "April, 2022 - June, 2022",
	},
];
