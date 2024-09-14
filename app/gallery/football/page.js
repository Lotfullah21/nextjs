import footballImg from "@/images/football.jpeg";
import Image from "next/image";

const Courses = () => {
	return (
		<div className="relative h-80 max-w-lg mt-8">
			<Image src={footballImg} width={500} height={500} priority></Image>
			<h1 className="text-slate-600">The legends</h1>
		</div>
	);
};
export default Courses;
