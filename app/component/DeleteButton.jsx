import { deleteTask } from "../utils/actions";

const DeleteButton = ({ id }) => {
	return (
		<form action={deleteTask}>
			<input type="hidden" name="id" value={id} />
			<button type="submit" className="btn btn-xs btn-error">
				delete
			</button>
		</form>
	);
};

export default DeleteButton;
