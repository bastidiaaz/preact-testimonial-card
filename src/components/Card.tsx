export function Card({ profile, name, username, content }: { profile: string, name: string, username: string, content: string }) {
	return (
		<div class="card bg-white p-6 rounded-lg shadow-md">
			<div class="card__profile flex items-center">
				<img src={profile} alt="Profile" class="w-16 h-16 rounded-full" />
				<div class="card__profile__info ml-4">
					<h2 class="text-xl font-bold">{name}</h2>
					<p class="text-gray-600">@{username}</p>
				</div>
			</div>
			<div class="card__content mt-4">
				<p class="text-gray-600">{content}</p>
			</div>
		</div>
	);
}
