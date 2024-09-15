import Link from "next/link";

const Navbar = () => {
	return (
		<nav className="bg-base-200">
			<div className="mx-auto navbar  max-w-7xl flex gap-8 py-4 capitalize flex-col sm:flex-row">
				<Link className="capitalize" href="/gallery">
					gallery
				</Link>
				<Link className="capitalize" href="/tasks">
					tasks
				</Link>

				<Link className="capitalize" href="/drinks">
					coffee drinks
				</Link>
				<Link className="capitalize" href="/prisma">
					prisma
				</Link>
			</div>
		</nav>
	);
};
export default Navbar;
