import { createFileRoute, Link } from "@tanstack/react-router";
import NavBar from "@/components/NavBar/NavBar";
import "../App.css";

export const Route = createFileRoute("/")({
	component: App,
});

function App() {
	return (
		<>
			<h1>Welcome in the Data Base</h1>
		</>
	);
}
