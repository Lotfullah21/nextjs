"use client";

import { useFormStatus } from "react-dom";

const SubmitButton = () => {
	const { pending } = useFormStatus();

	return (
		<div>
			<button type="submit" className={buttonStyle}>
				{pending ? "submitting" : "submit"}
			</button>
		</div>
	);
};
export default SubmitButton;

const buttonStyle = `bg-red-700 hover:bg-red-900 text-white font-bold py-2 px-4 block rounded capitalize items-center`;
