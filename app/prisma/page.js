// import prisma from "@/utils/db";
import prisma from "../utils/db";

const prismaHandlers = async () => {
	try {
		const allTasks = await prisma.task.findMany({
			orderBy: {
				createdAt: "desc",
			},
		});
		return allTasks;
	} catch (error) {
		console.error("Error in prismaHandlers:", error);
		throw error; // Rethrow or handle error appropriately
	}
};

const Prisma = async () => {
	const tasks = await prismaHandlers();
	if (tasks.length === 0) {
		return <h1 className="font-md text-lg mt-8">No task to show...</h1>;
	}
	return (
		<div>
			<h1 className="text-5xl">Prisma</h1>
			{tasks.map((task) => {
				return (
					<h2 key={task.id} className="text-xl p-4">
						{task.content}
					</h2>
				);
			})}
		</div>
	);
};
export default Prisma;
