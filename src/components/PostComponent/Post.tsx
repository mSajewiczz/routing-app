import { useContext, useState } from "react";
import { PostsContext } from "../../components/PostsContext/PostsContext";

interface Post {
	userName: string;
	userLastName: string;
	age: number;
	study: string;
	profession: string;
}

export default function Post({
	userName,
	userLastName,
	age,
	study,
	profession,
}: Post) {
	// const userContext = useContext(PostsContext);

	const [showInfo, setShowInfo] = useState(false);

	const handleShowInfo = () => {
		setShowInfo(!showInfo);
	};

	return (
		<>
			<div className="bg-red-100 flex gap-2 flex-col">
				<h1>
					{userName} {userLastName}
				</h1>
				<p>Short description</p>
				<button className="text-start cursor-pointer" onClick={handleShowInfo}>
					Show more informations
				</button>
			</div>

			{showInfo ? (
				<div className="absolute bg-white border w-full h-screen">
					<div className="flex justify-between gap-2">
						<h3>
							More informations about {userName} {userLastName}
						</h3>
                        <button className="bg-red-400 text-white border cursor-pointer" onClick={() => setShowInfo(false)}>Close</button>
					</div>

                    <h4>Age: {age}</h4>
					<h4>Study: {study}</h4>
					<h4>Profession: {profession}</h4>
				</div>
			) : (
				""
			)}
		</>
	);
}
