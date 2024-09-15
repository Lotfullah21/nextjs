import prisma from "../utils/db";
import { fetchTasks } from "../utils/actions";
import DeleteButton from "./deleteButton";
import Link from "next/link";
import Test from "./SinglePageDrink";
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
									<Link
										href={`/tasks/${task.id}`}
										className="btn btn-accent btn-xs">
										edit item
									</Link>
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

import toast from "react-hot-toast";

export default Tasks;
