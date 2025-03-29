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
	// userName,
	// userLastName,
	// age,
	// study,
	// profession,
}) {
	const userContext = useContext(PostsContext);

	const [showInfo, setShowInfo] = useState(false);

	const handleShowInfo = () => {
		setShowInfo(!showInfo);
	};

	return (
		<>
			<div className="bg-amber-300 flex gap-4 p-3 flex-col rounded-lg">
				<h1 className="text-red-600">
					{userContext.name} {userContext.last_name}
				</h1>
				<p>{userContext.profession}</p>
				<button className="text-start cursor-pointer bg-amber-200 p-1 rounded-sm" onClick={handleShowInfo}>
					Show more informations
				</button>
			</div>

			{showInfo ? (
				<div className="fixed bg-amber-100 w-6xl h-150 p-5 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg">
					<div className="flex justify-between gap-2">
						<h3>
							More informations about <span className="text-red-600">{userContext.name} {userContext.last_name}</span>
						</h3>
                        <button className="bg-amber-400 text-white cursor-pointer px-6 py-1 rounded-sm" onClick={() => setShowInfo(false)}>Close</button>
					</div>

                    <h4>Age: {userContext.age}</h4>
					<h4>Study: {userContext.study}</h4>
					<h4>Profession: {userContext.profession}</h4>
				</div>
			) : (
				""
			)}
		</>
	);
}
