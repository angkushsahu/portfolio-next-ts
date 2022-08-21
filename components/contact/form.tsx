import { ChangeEvent, FormEvent, useContext, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import Context from "../../state";
import validateEmail from "../../utils/validateEmail";
import { IContactValues } from "../../types";

const Form = () => {
	const [state, handleSubmit] = useForm(String(process.env.FORMSPREE_ID));
	const { setModal, setLoading } = useContext(Context);
	const [values, setValues] = useState<IContactValues>({
		name: "",
		email: "",
		subject: "",
		message: "",
	});

	const formSubmit = async (e: FormEvent) => {
		e.preventDefault();
		console.log("This is awesome");

		if (!values.name || !values.email || !values.message) {
			setModal({ open: true, heading: "Warning", message: "Please validate all the fields" });
			return;
		}

		if (!validateEmail(values.email)) {
			setModal({ open: true, heading: "Warning", message: "Please enter a valid e-mail" });
			return;
		}

		try {
			setLoading(true);
			const result = await handleSubmit(e);
			if (result.response?.status === 200) {
				setValues(previousValues => {
					return { name: "", email: "", subject: "", message: "" };
				});
			}
			setLoading(false);
			setModal({
				open: true,
				heading: "Success",
				message: "Thanks for reaching out to me, I'll get back to you as soon as possible",
			});
		} catch (err: any) {
			setLoading(false);
			setModal({
				open: true,
				heading: "Error",
				message: "Unable to send e-mail, please try again",
			});
		}
	};

	const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setValues(previousValues => {
			return { ...values, [e.target.name]: e.target.value };
		});
	};

	return (
		<form
			onSubmit={formSubmit}
			className="flex flex-col gap-6 sm:gap-8 max-w-2xl w-full mx-auto mt-12"
		>
			<div className="flex items-center justify-center flex-col md:flex-row gap-6 sm:gap-8">
				<div className="input_container">
					<label htmlFor="name">Enter your name</label>
					<input
						name="name"
						id="name"
						type="text"
						placeholder="Name"
						value={values.name}
						onChange={handleInputChange}
						required
					/>
					<ValidationError prefix="Name" field="name" errors={state.errors} />
				</div>
				<div className="input_container">
					<label htmlFor="email">Enter your e-mail</label>
					<input
						name="email"
						id="email"
						type="email"
						placeholder="E-mail"
						value={values.email}
						onChange={handleInputChange}
						required
					/>
					<ValidationError prefix="Email" field="email" errors={state.errors} />
				</div>
			</div>
			<div className="input_container">
				<label htmlFor="subject">Enter subject</label>
				<input
					name="subject"
					id="subject"
					type="text"
					placeholder="Subject"
					value={values.subject}
					onChange={handleInputChange}
					required
				/>
				<ValidationError prefix="Subject" field="subject" errors={state.errors} />
			</div>
			<div className="input_container">
				<label htmlFor="message">Enter your message for me</label>
				<textarea
					name="message"
					id="message"
					placeholder="Message"
					value={values.message}
					onChange={handleInputChange}
					required
				></textarea>
				<ValidationError prefix="Message" field="message" errors={state.errors} />
			</div>
			<button type="submit" className="primary-button px-20 ml-auto">
				Send
			</button>
		</form>
	);
};

export default Form;
