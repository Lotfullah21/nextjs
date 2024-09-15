import { editTask } from "../utils/actions";
const EditForm = ({ task }) => {
	const { id, completed, content } = task;
	return (
		<form
			action={editTask}
			className="w-full max-w-lg p-12 border-red-300 rounded-lg bg-slate-100">
			<input type="hidden" name="id" value={id}></input>
			<input
				type="text"
				name="task"
				defaultValue={content}
				required
				className="input input-bordered w-full"></input>
			<div className="form-control my-4">
				<label htmlFor="completed" className="label cursor-pointer">
					<span className="label-text">completed</span>
					<input
						type="checkbox"
						defaultChecked={completed}
						id="completed"
						name="completed"
						className="checkbox checkbox-primary checkbox-sm"></input>{" "}
				</label>
			</div>
			<button type="submit" className="btn btn-primary btn-block btn-sm">
				edit
			</button>
		</form>
	);
};
export default EditForm;
