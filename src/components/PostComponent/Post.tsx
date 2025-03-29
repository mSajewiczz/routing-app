import { useContext, useState } from "react";
import { PostsContext } from "../../components/PostsContext/PostsContext";

export default function Post() {
	const userContext = useContext(PostsContext);

	const [showUserInfo, setShowUserInfo] = useState(false);

	const handleShowInfo = () => {
		setShowUserInfo(!showUserInfo);
	};

	return (
		<>
			<div className="bg-amber-300 flex gap-4 p-3 flex-col rounded-lg">
				<h1 className="text-red-600">
					{userContext.name} {userContext.last_name}
				</h1>

				<p>{userContext.profession}</p>
				<button
					className="text-start cursor-pointer bg-amber-200 p-1 rounded-sm"
					onClick={handleShowInfo}>
					Show more informations
				</button>
			</div>

			{showUserInfo ? (
				<div className="fixed bg-amber-100 w-6xl h-150 p-5 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg">
					<div className="flex justify-between gap-2">
						<h3>
							More informations about{" "}
							<span className="text-red-600">
								{userContext.name} {userContext.last_name}
							</span>
						</h3>
						<button
							className="bg-amber-400 text-white cursor-pointer px-6 py-1 rounded-sm"
							onClick={() => setShowUserInfo(false)}>
							Close
						</button>
					</div>

					<div className="flex items-center gap-2">
						<img
							className="py-2 rounded-sm"
							src={userContext.photo}
							alt={`Photo of ${userContext.name} ${userContext.last_name}`}
						/>
						<div className="flex flex-col gap-4">
							<h4>
								{" "}
								<span className="text-red-600">Age:</span> {userContext.age}
							</h4>
							<h4>
								{" "}
								<span className="text-red-600">Study:</span> {userContext.study}
							</h4>
							<h4>
								{" "}
								<span className="text-red-600">Profession:</span>{" "}
								{userContext.profession}
							</h4>
						</div>
					</div>
				</div>
			) : (
				""
			)}
		</>
	);
}
