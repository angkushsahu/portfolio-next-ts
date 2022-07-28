import { createContext, Dispatch, SetStateAction } from "react";

export interface ModalType {
	open: boolean;
	heading: string;
	message: string;
}

interface ContextType {
	loading: boolean;
	modal: { open: boolean; message: string; heading: string };
	setLoading: Dispatch<SetStateAction<boolean>>;
	setModal: Dispatch<SetStateAction<ModalType>>;
}

const Context = createContext<ContextType>({} as ContextType);

export default Context;
