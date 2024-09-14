import Link from "next/link";
import Component from "./gallery/page";

export default function Home() {
	return (
		<div>
			<h1 className="text-2xl">Home page</h1>
			<Link href="/courses" className="text-red-600 hover:text-red-800">
				کورس ها
			</Link>
		</div>
	);
}
