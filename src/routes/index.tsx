import { createFileRoute, Link} from "@tanstack/react-router";
import "../App.css";

export const Route = createFileRoute("/")({
	component: App,
});

function App() {
	return (
		<div className="flex justify-center flex-col items-center gap-3">
			<h1 className="text-2xl p-2">Welcome in the <span className="bg-amber-400 text-white rounded-lg p-2">User Data Base</span></h1>
			<p>Here you can find many people and check their full name, age, completed study and profession!</p>
			<Link to="/Posts"><button className="cursor-pointer bg-amber-400 text-white rounded-lg py-1 px-2 hover:bg-amber-500 transition-all">Get more informations</button></Link>
		</div>
	);
}
