import Image from "next/image";
import Link from "next/link";

const Hero = () => {
	return (
		<section className="section hero">
			<section className="flex-1 flex flex-col justify-center">
				<h1>Hey, this is Angkush</h1>
				<h2 className="my-6">A Full-Stack Developer</h2>
				<p>I code websites that are performant and attractive.</p>
				<a
					href="https://drive.google.com/file/d/10sPB1KvlbEG0QWgZqcdCgODKqZj5J7WV/view?usp=sharing"
					rel="noopener noreferrer"
					target="_blank"
					className="primary-button w-40 flex items-center justify-center mt-6"
					download
				>
					Resume
				</a>
				<Link href="/#projects">
					<span className="secondary-button mt-2 md:hidden w-40 flex items-center justify-center">
						Projects
					</span>
				</Link>
				<Link href="/#contact">
					<span className="secondary-button mt-2 md:hidden w-40 flex items-center justify-center">
						Contact
					</span>
				</Link>
			</section>
			<section className="flex-1 flex items-center justify-center">
				<Image src="/images/programming.png" alt="programming" width="300" height="300" />
			</section>
		</section>
	);
};

export default Hero;
