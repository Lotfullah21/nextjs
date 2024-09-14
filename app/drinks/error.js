"use client";
const error = ({ error }) => {
	return (
		<div>
			<h1 className="text-2xl text-error">{error.message}</h1>
		</div>
	);
};
export default error;
