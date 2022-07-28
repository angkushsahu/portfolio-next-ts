import { NextRouter, useRouter } from "next/router";
import Meta from "../components/meta";

const Error = () => {
	const router: NextRouter = useRouter();

	return (
		<main className="min-h-screen flex flex-col items-center justify-center py-12 px-4 smaller:px-6 bg-light-bg dark:bg-dark-bg">
			<Meta title="Error - Angkush Sahu" />
			<h1 className="text-7xl smaller:text-9xl">404</h1>
			<h2 className="text-center mt-4 mb-12">This page does not exist</h2>
			<button type="button" className="primary-button" onClick={() => router.replace("/")}>
				Back to home
			</button>
		</main>
	);
};

export default Error;
