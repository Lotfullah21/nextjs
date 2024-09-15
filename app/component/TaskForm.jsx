"use client";
import { createTaskNew } from "../utils/actions";
import { useFormState } from "react-dom";
import SubmitButton from "./SubmitButton";
import { useEffect } from "react";
import toast from "react-hot-toast";

const Form = () => {
	const initialState = { message: null };

	const [state, formAction] = useFormState(createTaskNew, initialState);
	useEffect(() => {
		if (state.message === "error") {
			toast.error("there was an error");
			return;
		}
		if (state.message === "success") {
			toast.success("task created");
			return;
		}
	}, [state.message]);
	return (
		<>
			<form action={formAction} className="w-full max-w-lg">
				{/* {state.message && <p className="mb-4">{state.message}</p>} */}
				<div className="w-full join flex justify-between">
					<input
						type="text"
						name="task"
						placeholder="task"
						className="input input-bordered w-full join-item"
						required></input>
					<SubmitButton></SubmitButton>
				</div>
			</form>
		</>
	);
};

export default Form;
