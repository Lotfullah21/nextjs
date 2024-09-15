"use client";

import { useFormStatus } from "react-dom";

const SubmitButton = () => {
	const { pending } = useFormStatus();

	return (
		<div>
			<button
				type="submit"
				className="btn btn-primary join-item uppercase"
				disabled={pending}>
				{pending ? "submitting..." : "create task"}
			</button>
		</div>
	);
};
export default SubmitButton;
