import { fetchTasks } from "../utils/actions";
import DeleteButton from "./DeleteButton";
import Link from "next/link";
const Tasks = async () => {
	const tasks = await fetchTasks();
	return (
		<div className="grid mt-8 max-w-xl">
			{tasks.length ? (
				<div>
					{tasks.map((task) => {
						return (
							<div
								key={task.id}
								className="flex justify-between items-center px-6 py-4 mb-2 border border-base-200 rounded-lg shadow">
								<h2
									className={`text-lg capitalize ${
										task.completed ? "line-through" : null
									}`}>
									{task.content}
								</h2>

								<div className="flex gap-6 items-center">
									{/* edit button */}
									<Link
										href={`/tasks/${task.id}`}
										className="btn btn-accent btn-xs">
										edit item
									</Link>
									{/* delete button */}
									<DeleteButton id={task.id}></DeleteButton>
								</div>
							</div>
						);
					})}
				</div>
			) : (
				<h1>You have not task to do</h1>
			)}
		</div>
	);
};

export default Tasks;
