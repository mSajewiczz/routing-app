import Post from "@/components/PostComponent/Post";
import { createFileRoute, Link } from "@tanstack/react-router";
import data from "../../database/database.json";
import NavBar from "@/components/NavBar/NavBar";

// import {useState} from "react";

import { PostsContext } from "../../src/components/PostsContext/PostsContext";

export const Route = createFileRoute("/Posts")({
	component: RouteComponent,
});

// const [showInfo, setShowInfo] = useState(false);


const userObject = data.map((user) => (
    {
		id: user.id,
        name: user.name,
        last_name: user.last_name, 
        age: user.age,
        study: user.study,
        profession: user.profession
    }
)) 

const x = () => {
	console.log(userObject);
}


function RouteComponent() {
	return (
		<div className="flex flex-col gap-5">
			<h1 onClick={x} className="flex justify-center items-center text-2xl">Posts</h1>
			<ul className="flex gap-20 flex-wrap justify-center">
				{data.map((user) => (
					<PostsContext.Provider value={userObject[user.id]}>
                    <Post  />
					{/* <Post userName = {user.name} userLastName = {user.last_name} age = {user.age} study = {user.study} profession = {user.profession}/> */}
                </PostsContext.Provider>
				))}
			</ul>
		
		</div>
	);
}