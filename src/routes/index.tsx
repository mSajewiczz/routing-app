import { createFileRoute, Link } from "@tanstack/react-router";
import "../App.css";

export const Route = createFileRoute("/")({
	component: App,
});

function App() {
	return (
		<div className="flex justify-center flex-col items-center">
			<h1 className="text-2xl p-2">Welcome in the Data Base</h1>
			<p>Here you can find many people and check their full name, age, completed study and profession!</p>
		</div>
	);
}
