import hindImg from "@/images/hind.png";
import Image from "next/image";

const hind = () => {
	return (
		<div className="relative max-w-xl mt-8">
			<Image src={hindImg} priority></Image>
			<h1 className="text-slate-600">The Angel</h1>
		</div>
	);
};
export default hind;
