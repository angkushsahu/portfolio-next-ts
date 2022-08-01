import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Router } from "next/router";
import { ThemeProvider } from "next-themes";
import { useState } from "react";
import Context, { ModalType } from "../state";
import Loader from "../components/loader";
import Modal from "../components/modal";

function MyApp({ Component, pageProps }: AppProps) {
	const [loading, setLoading] = useState<boolean>(false);
	const [modal, setModal] = useState<ModalType>({} as ModalType);

	Router.events.on("routeChangeStart", () => {
		setLoading(previousValue => true);
	});
	Router.events.on("routeChangeComplete", () => {
		setLoading(previousValue => false);
	});

	return (
		<>
			<ThemeProvider defaultTheme="dark" attribute="class">
				<Context.Provider value={{ loading, modal, setLoading, setModal }}>
					{loading && <Loader />}
					{modal.open && modal.message && <Modal />}
					<Component {...pageProps} />
				</Context.Provider>
			</ThemeProvider>
		</>
	);
}

export default MyApp;
