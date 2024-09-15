import Link from "next/link";
import EditForm from "../../component/EditForm";
import { getTask } from "../../utils/actions";
const SingleTask = async ({ params }) => {
	const task = await getTask(params.id);
	return (
		<div className="mb-8">
			<Link href="/tasks" className="btn btn-accent mb-8">
				back to task
			</Link>
			<EditForm task={task}></EditForm>
		</div>
	);
};
export default SingleTask;
