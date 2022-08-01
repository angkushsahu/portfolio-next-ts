import Link from "next/link";
import { useTheme } from "next-themes";
import { useState } from "react";
import { BsListNested } from "react-icons/bs";
import { ImCancelCircle } from "react-icons/im";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const Header = () => {
	const { theme, setTheme } = useTheme();
	const [showNavbar, setShowNavbar] = useState<boolean>(false);

	const handleNavToggle = () => {
		setShowNavbar(previousValue => false);
	};

	return (
		<header className="sticky z-20 inset-0 bg-gradient-to-r from-gray-300 to-white sm:from-gray-300 sm:to-gray-100 dark:from-dark-bg dark:to-slate-800 dark:sm:from-dark-bg dark:sm:to-slate-700 shadow-lg dark:shadow-slate-800 py-4 flex items-center justify-between px-4 sm:px-12">
			<nav className="hidden md:flex gap-6">
				<Link href="/#">
					<span className="navbar-links" onClick={handleNavToggle}>
						Home
					</span>
				</Link>
				<Link href="/#experience">
					<span className="navbar-links" onClick={handleNavToggle}>
						Experience
					</span>
				</Link>
				<Link href="/#skills">
					<span className="navbar-links" onClick={handleNavToggle}>
						Skills
					</span>
				</Link>
				<Link href="/#projects">
					<span className="navbar-links" onClick={handleNavToggle}>
						Projects
					</span>
				</Link>
				<Link href="/#about">
					<span className="navbar-links" onClick={handleNavToggle}>
						About
					</span>
				</Link>
				<Link href="/#contact">
					<span className="navbar-links" onClick={handleNavToggle}>
						Contact
					</span>
				</Link>
			</nav>
			<BsListNested
				className="cursor-pointer text-primary md:hidden"
				onClick={() => setShowNavbar(previousVal => true)}
				size={30}
			/>
			<span>
				{theme === "dark" && (
					<span>
						<MdLightMode
							size={30}
							className="cursor-pointer text-primary"
							onClick={() => setTheme("light")}
						/>
					</span>
				)}
				{theme === "light" && (
					<span>
						<MdDarkMode
							size={30}
							className="cursor-pointer text-primary"
							onClick={() => setTheme("dark")}
						/>
					</span>
				)}
			</span>
			<nav
				className={`md:hidden fixed z-30 left-0 top-0 bottom-0 shadow-xl dark:shadow-slate-800 bg-light-bg dark:bg-dark-bg flex gap-4 flex-col py-10 px-6 w-[15em] transition-transform origin-left ${
					showNavbar ? "scale-x-100" : "scale-x-0"
				}`}
			>
				<ImCancelCircle
					className="cursor-pointer text-primary mb-6"
					onClick={() => setShowNavbar(previousVal => false)}
					size={30}
				/>
				<Link href="/#">
					<span className="mobile-navbar-links" onClick={handleNavToggle}>
						Home
					</span>
				</Link>
				<Link href="/#experience">
					<span className="mobile-navbar-links" onClick={handleNavToggle}>
						Experience
					</span>
				</Link>
				<Link href="/#skills">
					<span className="mobile-navbar-links" onClick={handleNavToggle}>
						Skills
					</span>
				</Link>
				<Link href="/#projects">
					<span className="mobile-navbar-links" onClick={handleNavToggle}>
						Projects
					</span>
				</Link>
				<Link href="/#about">
					<span className="mobile-navbar-links" onClick={handleNavToggle}>
						About
					</span>
				</Link>
				<Link href="/#contact">
					<span className="mobile-navbar-links" onClick={handleNavToggle}>
						Contact
					</span>
				</Link>
			</nav>
		</header>
	);
};

export default Header;
