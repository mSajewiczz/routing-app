import NavBar from '@/components/NavBar/NavBar'
import { Outlet, createRootRoute, Link } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

export const Route = createRootRoute({
  component: () => (
    <>
    <nav className="bg-amber-500 p-2">
          <div className="flex">
            <Link to="/" className="text-white hover:underline [&.active]:font-bold">Main</Link>
            <Link to="/Posts" className="text-white hover:underline [&.active]:font-bold">Posts</Link>
          </div>
        </nav>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
})
