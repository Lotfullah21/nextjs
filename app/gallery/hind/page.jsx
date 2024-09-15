import hindImg from "../../../images/hind.png";
import Image from "next/image";
import Link from "next/link";

const hind = () => {
	return (
		<div className="relative max-w-xl mt-8">
			<Link href="/gallery" className="btn btn-primary mb-4 uppercase text-1xl">
				back home
			</Link>
			<Image src={hindImg} priority></Image>
			<h1 className="text-slate-600">The Angel</h1>
		</div>
	);
};
export default hind;
