import { removeTask } from "../utils/actions";

const DeleteButton = ({ id }) => {
	// create a remove function with given id
	const removeTaskWithId = removeTask.bind(null, id);
	return (
		<form action={removeTaskWithId}>
			<button
				type="submit"
				className="bg-red-500 text-white text-xs rounded p-2 ">
				delete
			</button>
		</form>
	);
};
export default DeleteButton;
