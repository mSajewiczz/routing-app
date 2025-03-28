import { Link } from "@tanstack/react-router";

export default function NavBar() {
	return (
		<nav className="bg-amber-500 p-2">
			<div className="flex">
				<Link to="/" className="text-white hover:underline">Main</Link>
				<Link to="/Posts" className="text-white hover:underline">Posts</Link>
			</div>
		</nav>
	);
}
