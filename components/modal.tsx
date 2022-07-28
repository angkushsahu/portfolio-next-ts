import { useContext } from "react";
import { AiOutlineWarning } from "react-icons/ai";
import { MdOutlineDoneOutline } from "react-icons/md";
import { BiErrorAlt } from "react-icons/bi";
import Context from "../state";

const Modal = () => {
	const { modal, setModal } = useContext(Context);

	return (
		<main className="fixed z-40 inset-0 bg-white/10 backdrop-blur-md flex items-center justify-center px-6 py-8">
			<section className="px-6 sm:px-10 py-8 bg-slate-600 rounded-md shadow-2xl shadow-gray-500 dark:shadow-gray-800 max-w-lg">
				<div className="flex gap-6 items-center mb-6">
					{modal.heading === "Success" && (
						<MdOutlineDoneOutline size={40} color="lightgreen" />
					)}
					{modal.heading === "Warning" && <AiOutlineWarning size={40} color="orange" />}
					{modal.heading === "Error" && <BiErrorAlt size={40} color="red" />}
					<h1>{modal.heading}</h1>
				</div>
				<h3 className="font-primary-semibold text-xl text-white">{modal.message}</h3>
				<button
					type="button"
					className="primary-button mt-8 ml-auto block"
					onClick={() => setModal({ open: false, heading: "", message: "" })}
				>
					Okay !
				</button>
			</section>
		</main>
	);
};

export default Modal;
