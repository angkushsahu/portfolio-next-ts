import Link from "next/link";
import { FiLinkedin, FiMail } from "react-icons/fi";
import { VscGithub } from "react-icons/vsc";

const Socials = () => {
	return (
		<>
			<aside className="fixed z-10 bottom-0 right-8 hidden sm:flex flex-col items-center gap-6">
				<Link href="/#contact" className="bg-red-500">
					<FiMail
						className="cursor-pointer text-light-title dark:text-dark-title transition-colors hover:text-primary hover:shadow-2xl hover:shadow-primary dark:hover:text-primary"
						size={30}
					/>
				</Link>
				<a href="https://github.com/angkushsahu" rel="noopener noreferrer" target="_blank">
					<VscGithub
						className="cursor-pointer text-light-title dark:text-dark-title transition-colors hover:text-primary hover:shadow-2xl hover:shadow-primary dark:hover:text-primary"
						size={30}
					/>
				</a>
				<a
					href="hthttps://linkedin.com/in/angkush-sahu-0409311bb"
					rel="noopener noreferrer"
					target="_blank"
				>
					<FiLinkedin
						className="cursor-pointer text-light-title dark:text-dark-title transition-colors hover:text-primary hover:shadow-2xl hover:shadow-primary dark:hover:text-primary"
						size={30}
					/>
				</a>
				<span className="w-[3px] h-28 mt-2 bg-light-title dark:bg-dark-title"></span>
			</aside>
			<aside className="fixed z-10 bottom-0 right-0 left-0 flex sm:hidden items-center justify-center gap-6 px-3 py-3 bg-light-bg dark:bg-dark-bg shadow-2xl shadow-black">
				<span className="h-[3px] flex-1 mt-2 bg-primary"></span>
				<Link href="/#contact" className="bg-red-500">
					<FiMail className="cursor-pointer text-primary" size={30} />
				</Link>
				<a href="https://github.com/angkushsahu" rel="noopener noreferrer" target="_blank">
					<VscGithub className="cursor-pointer text-primary" size={30} />
				</a>
				<a
					href="hthttps://linkedin.com/in/angkush-sahu-0409311bb"
					rel="noopener noreferrer"
					target="_blank"
				>
					<FiLinkedin className="cursor-pointer text-primary" size={30} />
				</a>
				<span className="h-[3px] flex-1 mt-2 bg-primary"></span>
			</aside>
		</>
	);
};

export default Socials;
