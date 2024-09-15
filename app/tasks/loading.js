"use client";

const Loading = () => {
	return (
		<div className="flex items-center justify-center h-screen">
			{/* DaisyUI spinner */}
			<span className="loading loading-spinner loading-lg text-blue-500"></span>
			<h1 className="ml-4 text-red-800 text-lg">Loading ...</h1>
		</div>
	);
};

export default Loading;
