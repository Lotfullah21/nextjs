"use server";
import { revalidatePath } from "next/cache";
import prisma from "./db";
import { redirect } from "next/navigation";
import { z } from "zod";

export const createTask = async (prevState, formData) => {
	const data = formData.get("task");
	try {
		await prisma.task.create({
			data: {
				content: data,
			},
		});
		revalidatePath("/tasks");
		return "user created successfully";
	} catch (error) {
		console.log(error);
		return "Failed to create the user";
	}
};

export const createTaskNew = async (prevState, formData) => {
	await new Promise((resolve) => setTimeout(resolve, 1000));
	const data = formData.get("task");
	// Define the schema to validate the data
	const Task = z.object({
		data: z
			.string()
			.min(5, { message: "Task content must be at least 5 characters long" }),
	});

	try {
		// Pass and check the input against zod schema
		Task.parse({ data });
		await prisma.task.create({
			data: {
				content: data,
			},
		});
		revalidatePath("/tasks");
		return { message: "success" };
	} catch (error) {
		console.log(error);
		return { message: "error" };
	}
};

export const fetchTasks = async () => {
	return prisma.task.findMany({
		orderBy: {
			createdAt: "asc",
		},
	});
};

export const deleteTask = async (formData) => {
	const id = formData.get("id");
	await prisma.task.delete({
		where: { id },
	});
	revalidatePath("/tasks");
};

export const getTask = async (id) => {
	const data = prisma.task.findUnique({
		where: {
			id: id,
		},
	});
	return data;
};

export const editTask = async (formData) => {
	const id = formData.get("id");
	const content = formData.get("task");
	const done = formData.get("completed");
	await prisma.task.update({
		// Grab the item
		where: {
			id: id,
		},
		// What to update
		data: {
			content: content,
			completed: done === "on" ? true : false,
		},
	});
	redirect("/tasks");
};
