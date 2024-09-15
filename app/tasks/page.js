import Form from "../component/TaskForm.jsx";
import Tasks from "../component/TasksList.jsx";
// Make this page dynamic
export const dynamic = "force-dynamic";
const page = () => {
	return (
		<div>
			<Form></Form>
			<Tasks></Tasks>
		</div>
	);
};
export default page;
