import { ChangeEvent, FormEvent, MutableRefObject, useContext, useRef, useState } from "react";
import { sendForm } from "@emailjs/browser";
import Context from "../../state";
import validateEmail from "../../utils/validateEmail";

interface ValueType {
	name: string;
	email: string;
	subject: string;
	message: string;
}

const Form = () => {
	const { setModal, setLoading } = useContext(Context);
	const formRef: MutableRefObject<HTMLFormElement> =
		useRef<HTMLFormElement>() as MutableRefObject<HTMLFormElement>;
	const [values, setValues] = useState<ValueType>({
		name: "",
		email: "",
		subject: "",
		message: "",
	});

	const formSubmit = (e: FormEvent) => {
		e.preventDefault();

		if (!values.name || !values.email || !values.message) {
			setModal({ open: true, heading: "Warning", message: "Please validate all the fields" });
			return;
		}

		if (!validateEmail(values.email)) {
			setModal({ open: true, heading: "Warning", message: "Please enter a valid e-mail" });
			return;
		}

		setLoading(true);
		sendForm(
			String(process.env.SERVICE_ID),
			String(process.env.TEMPLATE_ID),
			formRef?.current,
			String(process.env.PUBLIC_KEY),
		)
			.then(() => {
				setLoading(false);
				setModal({
					open: true,
					heading: "Success",
					message:
						"Thanks for reaching out to me, I'll get back to you as soon as possible",
				});
				setValues(previousValues => {
					return { name: "", email: "", subject: "", message: "" };
				});
			})
			.catch((err: any) => {
				setLoading(false);
				setModal({
					open: true,
					heading: "Error",
					message: "Unable to send e-mail, please try again",
				});
			});
	};

	const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setValues(previousValues => {
			return { ...values, [e.target.name]: e.target.value };
		});
	};

	const inputClass: string = `px-4 py-2 rounded text-base font-secondary border-none outline-none w-full bg-gray-100 dark:bg-zinc-700 shadow-md`;

	return (
		<form
			ref={formRef}
			onSubmit={formSubmit}
			className="flex flex-col gap-8 max-w-2xl w-full mx-auto mt-12"
		>
			<div className="flex items-center justify-center flex-col md:flex-row gap-8">
				<input
					name="name"
					id="name"
					type="text"
					placeholder="Name"
					value={values.name}
					onChange={handleInputChange}
					className={inputClass}
					required
				/>
				<input
					name="email"
					id="email"
					type="email"
					placeholder="E-mail"
					value={values.email}
					onChange={handleInputChange}
					className={inputClass}
					required
				/>
			</div>
			<input
				name="subject"
				id="subject"
				type="text"
				placeholder="Subject"
				value={values.subject}
				onChange={handleInputChange}
				className={inputClass}
				required
			/>
			<textarea
				name="message"
				id="message"
				placeholder="Message"
				value={values.message}
				onChange={handleInputChange}
				className={`resize-none h-32 ${inputClass}`}
				required
			></textarea>
			<button type="submit" className="primary-button px-20 ml-auto">
				Send
			</button>
		</form>
	);
};

export default Form;
