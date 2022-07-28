import Form from "../components/contact/form";
import Meta from "../components/meta";

const Contact = () => {
	return (
		<main className="min-h-screen flex flex-col items-center justify-center py-12 px-4 smaller:px-6 bg-light-bg dark:bg-dark-bg">
			<Meta title="Contact - Angkush Sahu" />
			<h1 className="text-center">Contact</h1>
			<p className="mt-6 text-center">
				Feel free to contact me if you want to hire me, have a project in mind, or just for
				a casual chat.
			</p>
			<p className="mb-4 mt-3 text-center">I would love to hear from you.</p>
			<Form />
		</main>
	);
};

export default Contact;
