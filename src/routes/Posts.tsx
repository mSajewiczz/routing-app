import Post from "@/components/PostComponent/Post";
import { createFileRoute, Link } from "@tanstack/react-router";
import data from "../../database/database.json";

// import { PostsContext } from "../../src/components/PostsContext/PostsContext";

export const Route = createFileRoute("/Posts")({
	component: RouteComponent,
});

// const userObject = data.map((user) => (
//     {
//         name: user.name,
//         last_name: user.last_name, 
//         age: user.age,
//         study: user.study,
//         profession: user.profession
//     }
// )) 

function RouteComponent() {
	return (
		<>
			<div>Posts</div>
            <Link to = "/">Main Site</Link>
			<ul className="flex flex-col gap-2">
				{data.map((user) => (
					// <PostsContext.Provider value={userObject}>
                    <Post userName = {user.name} userLastName = {user.last_name} age = {user.age} study = {user.study} profession = {user.profession}/>
                // </PostsContext.Provider>
				))}
			</ul>
		
		</>
	);
}
