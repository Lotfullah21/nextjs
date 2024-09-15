import { fetchTasks, createTask } from "../../utils/actions";
import { NextResponse, NextRequest } from "next/server";
import prisma from "../../utils/db";

export const GET = async (request) => {
	const newURL = new URL(request.url);
	const { searchParams } = newURL;
	const id = searchParams.get("id");
	const tasks = await fetchTasks();
	return Response.json({ tasks });
};

export const POST = async (request) => {
	const data = await request.json();
	const task = await prisma.task.create({
		data: {
			content: data.content,
		},
	});
	return Response.json({ data: task });
};
