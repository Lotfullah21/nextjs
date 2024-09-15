import footballImg from "../../../images/football.jpeg";
import Image from "next/image";
import Link from "next/link";
const Courses = () => {
	return (
		<div className="relative h-80 max-w-lg mt-8">
			<Link href="/gallery" className="btn btn-primary uppercase text-1xl mb-4">
				back home
			</Link>
			<Image src={footballImg} width={500} height={500} priority></Image>
			<h1 className="text-slate-600">The legends</h1>
		</div>
	);
};
export default Courses;
