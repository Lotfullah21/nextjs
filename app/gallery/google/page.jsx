import larryImg from "@/images/larry.jpeg";
import Image from "next/image";

const hind = () => {
	return (
		<div className="relative h-80 max-w-lg mt-8">
			<Image src={larryImg} width={500} priority></Image>
			<h1 className="text-slate-600">The different thinkers</h1>
		</div>
	);
};
export default hind;
