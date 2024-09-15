import Link from "next/link";

const layout = ({ children }) => {
	return (
		<div>
			<header>
				<nav className="flex gap-8">
					<Link
						href="/gallery/football"
						className="text-blue-300 hover:text-blue-600">
						football
					</Link>
					<Link
						href="/gallery/hind"
						className="text-blue-300 hover:text-blue-600">
						hind
					</Link>
					<Link
						href="/gallery/google"
						className="text-blue-300 hover:text-blue-600">
						google
					</Link>
				</nav>
			</header>
			<div>{children}</div>
		</div>
	);
};
export default layout;
