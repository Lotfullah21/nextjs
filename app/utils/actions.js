"use server";
import { readFile, writeFile } from "fs/promises";
import { revalidatePath } from "next/cache";

export const createTask = async (prevState, formData) => {
	// await new Promise((resolve) => setTimeout(resolve, 2000));
	console.log(formData);
	const task = formData.get("task")?.toString();
	const due = formData.get("due")?.toString();
	const newUser = { task, due, id: Date.now().toString() };
	try {
		await saveTask(newUser);
		revalidatePath("/tasks");
		return "user created successfully";
	} catch (error) {
		console.log(error);
		return "Failed to create the user";
	}
};

export const fetchTasks = async () => {
	const results = await readFile("tasks.json", { encoding: "utf8" });
	const tasks = results ? JSON.parse(results) : [];
	return tasks;
};

export const saveTask = async (newUser) => {
	const tasks = await fetchTasks();
	tasks.push(newUser);
	await writeFile("tasks.json", JSON.stringify(tasks));
};

export const deleteUser = async (formData) => {
	const id = formData.get("id");
	const tasks = await fetchTasks();
	const newTasks = tasks.filter((task) => task.id !== id);
	await writeFile("tasks.json", JSON.stringify(newTasks));
	revalidatePath("/tasks");
};

export const removeTask = async (id) => {
	const tasks = await fetchTasks();
	const updatedTasks = tasks.filter((task) => task.id !== id);
	await writeFile("tasks.json", JSON.stringify(updatedTasks));
	revalidatePath("/tasks");
};
