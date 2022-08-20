import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { Suspense } from "react";
const Header = dynamic(() => import("../components/layout/header"), { ssr: false });
const Socials = dynamic(() => import("../components/layout/socials"), { suspense: true });
const Hero = dynamic(() => import("../components/hero"), { suspense: true });
const Skills = dynamic(() => import("../components/skills"), { suspense: true });
const Projects = dynamic(() => import("../components/projects"), { suspense: true });
const About = dynamic(() => import("../components/about"), { suspense: true });
const Contact = dynamic(() => import("../components/contact"), { suspense: true });
const EduAndExp = dynamic(() => import("../components/qualifications"), { suspense: true });
import Loader from "../components/popups/loader";
import Meta from "../components/meta";

const Home: NextPage = () => {
	return (
		<main className="root">
			<Meta title="Angkush Sahu" />
			<Suspense fallback={<Loader />}>
				<Socials />
				<Header />
				<Hero />
				<EduAndExp />
				<Skills />
				<Projects />
				<About />
				<Contact />
			</Suspense>
		</main>
	);
};

export default Home;
