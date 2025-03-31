import Post from "@/components/PostComponent/Post";
import { createFileRoute, Link } from "@tanstack/react-router";
import data from "../../database/database.json";
import { PostsContext } from "../../src/components/PostsContext/PostsContext";
import { useState } from "react";

export const Route = createFileRoute("/Posts")({
	component: RouteComponent,
});

const userObject = data.map((user) => ({
	id: user.id,
	name: user.name,
	last_name: user.last_name,
	age: user.age,
	study: user.study,
	profession: user.profession,
	photo: user.photo,
}));

function RouteComponent() {
	return (
		<div className="flex flex-col gap-5 ">
			<h1 className="flex justify-center items-center text-2xl">User data</h1>
			<ul className="flex gap-20 flex-wrap justify-center">
				{data.map((user) => (
					<PostsContext.Provider key={user.id} value={userObject[user.id]}>
						<Post />
					</PostsContext.Provider>
				))}
			</ul>
		</div>
	);
}
