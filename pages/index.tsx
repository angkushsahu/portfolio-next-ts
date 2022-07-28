import type { NextPage } from "next";
// import dynamic from "next/dynamic";
// const Header = dynamic(() => import("../components/header"), { suspense: true });
import Meta from "../components/meta";
import Header from "../components/header";
import Socials from "../components/socials";
import Hero from "../components/hero";
import Skills from "../components/skills";
// import EduAndExp from "../components/educationAndExperience";
import Projects from "../components/projects";
import About from "../components/about";
import Contact from "../components/contact";

const Home: NextPage = () => {
	return (
		<main className="root bg-light-bg dark:bg-dark-bg">
			<Meta title="Angkush Sahu" />
			<Socials />
			<Header />
			<Hero />
			<Skills />
			{/* <EduAndExp /> */}
			<Projects />
			<About />
			<Contact />
		</main>
	);
};

export default Home;
