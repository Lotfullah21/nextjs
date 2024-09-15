import toast from "react-hot-toast";
const TestComponent = () => {
	const showToast = () => {
		toast.success("Toast is working!");
	};

	return <button onClick={showToast}>Show Toast</button>;
};

export default TestComponent;
