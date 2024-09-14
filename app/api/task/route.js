import { fetchTasks, saveTask } from "../../utils/actions";
import { NextResponse, NextRequest } from "next/server";

export const GET = async (request) => {
	const newURL = new URL(request.url);
	const { searchParams } = newURL;
	const id = searchParams.get("id");
	const tasks = await fetchTasks();
	return Response.json({ tasks });
};

export const POST = async (request) => {
	const task = await request.json();
	const newTask = { ...task, id: Date.now().toString() };
	await saveTask(newTask);
	return Response.json({ msg: "user created" });
};
