"use client";
import { createTask } from "../utils/actions";
import { useFormState } from "react-dom";
import SubmitButton from "./SubmitButton";
const Form = () => {
	const [message, formAction] = useFormState(createTask, null);

	return (
		<div className="grid items-center">
			{message && <p>{message}</p>}
			<form action={formAction} className={formStyle}>
				<input
					type="text"
					name="task"
					placeholder="task"
					className={inputStyle}></input>
				<input
					type="text"
					name="due"
					placeholder="duration"
					className={inputStyle}></input>
				<SubmitButton></SubmitButton>
			</form>
		</div>
	);
};

const formStyle = `w-full max-w-96 flex flex-col gap-y-8 shadow-lg rounded p-8`;
const inputStyle = `border shadow rounded py-4 px-2 text-grey-7000`;

export default Form;
