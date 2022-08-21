import { IProject } from "../../types";

export const projects: IProject[] = [
	{
		title: "PACIFIO",
		description:
			"An online store where you can browse several products available. After successful login, the user can purchase any product without any hassle. The payment method is secure with Stripe.",
		image: "https://res.cloudinary.com/dvhucdquc/image/upload/v1648674128/ProjectsHomeImages/Screenshot_228_tk9cf1.png",
		link: "https://pacifio.herokuapp.com/",
		frameworks: ["React", "Redux-Toolkit", "Tailwind", "Node", "Express", "Stripe", "Mongo-DB"],
		github: "https://angkush.vercel.app/not-ready-yet",
	},
	{
		title: "BLOGGERSBAY",
		description:
			"An online platform where you can create blogs for free without any hassle. Signup and set up your account to start your blogging journey right away.",
		image: "/images/error.png",
		link: "https://bloggersbay.herokuapp.com/",
		frameworks: [
			"React",
			"Redux-Toolkit",
			"Socket-io.client",
			"Tailwind",
			"Node",
			"Express",
			"Socket-io",
			"Mongo-DB",
		],
		github: "https://angkush.vercel.app/not-ready-yet",
	},
	{
		title: "CHAT-NATION",
		description:
			"Now stay connected to your loved ones with this real-time messaging application. This website offers fast message delivery and response. Add people to your friend list and stay connected with them.",
		image: "https://res.cloudinary.com/dvhucdquc/image/upload/v1660402110/ProjectsHomeImages/chat-nation_uzodci.png",
		link: "https://chat-nation.herokuapp.com/",
		frameworks: [
			"React",
			"Socket.io-client",
			"Tailwind",
			"Node",
			"Express",
			"Socket.io",
			"Mongo-DB",
		],
		github: "https://github.com/angkushsahu/chat-nation/",
	},
	{
		title: "COIN-LAND",
		description:
			"Track coins and their progress in this app. Now you can add your favorite coins to your watchlist and track their progress in graphs. Know about coins that are on trend and which might make you a lot of profit. Do give it a try.",
		image: "https://res.cloudinary.com/dvhucdquc/image/upload/v1658428724/ProjectsHomeImages/coin-land_qifnen.png",
		link: "https://coin-land.netlify.app",
		frameworks: ["React", "Tailwind", "Firebase"],
		github: "https://github.com/angkushsahu/coin-land/",
	},
];
