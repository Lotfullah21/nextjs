import { constants } from "buffer";
import { fetchTasks } from "../utils/actions";
import DeleteButton from "./deleteButton";
const Tasks = async () => {
	const tasks = await fetchTasks();
	return (
		<div className="grid mt-8">
			{tasks.length ? (
				<div>
					{tasks.map((task) => {
						return (
							<div
								key={task.id}
								className="grid sm:grid-cols-2 items-center  justify-between shadow-md p-2">
								<div className="grid sm:grid-cols-2">
									{" "}
									<h2 className="text-2xl capitalize flex flex-cols-2 mt-2 gap-x-8 items-center justify-between">
										{task.task}
									</h2>
									<span className="text-2xl capitalize flex flex-cols-2 mt-2 gap-x-8 items-center justify-between">
										{task.due}
									</span>
								</div>
								<DeleteButton id={task.id}></DeleteButton>
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
