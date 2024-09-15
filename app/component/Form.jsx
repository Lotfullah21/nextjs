"use client";
import { createTask } from "../utils/actions";
import { useFormState } from "react-dom";
import SubmitButton from "./SubmitButton";

const Form = () => {
	const [message, formAction] = useFormState(createTask, null);
	return (
		<>
			{message && <p>{message}</p>}
			<form action={formAction}>
				<div className="w-full join max-w-lg">
					<input
						type="text"
						name="task"
						placeholder="task"
						className="input input-bordered join-item w-ful"
						required></input>
					<SubmitButton></SubmitButton>
				</div>
			</form>
		</>
	);
};

export default Form;
