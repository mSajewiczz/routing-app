import { Outlet, createRootRoute, Link } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export const Route = createRootRoute({
	component: () => (
		<>
			<nav className="bg-amber-500 p-2 fixed w-full top-0 left-0 z-50">
				<div className="flex items-center gap-10">
					<h1 className="bg-amber-400 p-2 text-white">👨‍💻 User Data Base</h1>
					<div className="flex ">
						<Link
							to="/"
							className="text-white hover:underline [&.active]:font-bold">
							Main
						</Link>
						<Link
							to="/Posts"
							className="text-white hover:underline [&.active]:font-bold">
							User data
						</Link>
					</div>
				</div>
			</nav>
			<br></br>
      <br></br>
      <br></br>
			<Outlet />

			<TanStackRouterDevtools />
		</>
	),
});
