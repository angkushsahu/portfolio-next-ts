export interface ProjectType {
	title: string;
	description: string;
	link: string;
	frameworks: string[];
	image: string;
}

export const projects: ProjectType[] = [
	{
		title: "CHAT-NATION",
		description:
			"Now stay connected to your loved ones with this real-time messaging application. This website offers fast message delivery and response. Add people to your friend list and stay connected with them.",
		image: "",
		link: "",
		frameworks: [
			"React",
			"Tailwind",
			"Node",
			"Express",
			"Socket.io",
			"Socket.io-client",
			"Mongo-DB",
		],
	},
	{
		title: "PACIFIO",
		description:
			"An online store where you can browse several products available. After successful login, the user can purchase any product without any hassle. The payment method is secure with Stripe.",
		image: "https://res.cloudinary.com/dvhucdquc/image/upload/v1648674128/ProjectsHomeImages/Screenshot_228_tk9cf1.png",
		link: "",
		frameworks: ["React", "Tailwind", "Redux", "Node", "Express", "Stripe", "Mongo-DB"],
	},
	{
		title: "COIN-LAND",
		description:
			"Track coins and their progress in this app. Now you can add your favorite coins to your watchlist and track their progress in graphs. Know about coins that are on trend and which might make you a lot of profit. Do give it a try.",
		image: "https://res.cloudinary.com/dvhucdquc/image/upload/v1658428724/ProjectsHomeImages/coin-land_qifnen.png",
		link: "https://coin-land.netlify.app",
		frameworks: ["React", "Tailwind", "Firebase"],
	},
	{
		title: "ROBOPUNKS",
		description:
			"A demo NFT minting site where you can connect with Metamask and test ethers to mint NFTs. A user can mint up to 3 NFTs. This website was created for demo purposes, so nothing is amusing about this project. 😅",
		image: "https://res.cloudinary.com/dvhucdquc/image/upload/v1648666838/ProjectsHomeImages/Screenshot_227_zehq6m.png",
		link: "https://robopunks.netlify.app",
		frameworks: ["React", "SASS", "Ethers", "Solidity", "Hardhat"],
	},
];
