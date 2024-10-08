import Link from "next/link";

const layout = ({ children }) => {
	return (
		<div>
			<header>
				<nav className="flex gap-8">
					<Link
						href="/gallery/football"
						className="text-red-600 capitalize text-xl hover:text-blue-600">
						football
					</Link>
					<Link
						href="/gallery/hind"
						className="text-red-600 capitalize text-xl hover:text-blue-600">
						hind
					</Link>
					<Link
						href="/gallery/google"
						className="text-red-600 capitalize text-xl hover:text-blue-600">
						google
					</Link>
				</nav>
			</header>
			<div>{children}</div>
		</div>
	);
};
export default layout;
