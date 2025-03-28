import { createFileRoute, Link } from "@tanstack/react-router";
import "../App.css";

export const Route = createFileRoute("/")({
	component: App,
});

function App() {
	return (
		<>
			<h1 className="bg-red-100">Hello World</h1>
			<Link to = "/Posts">Posts</Link>
		</>
	);
}
