export function Card({ profile, name, username, content }: { profile: string, name: string, username: string, content: string }) {
	return (
		<div class="card flex flex-col w-[340px] bg-white p-6 rounded-lg shadow-md items-start gap-4">
			<div class="card__profile flex flex-row items-center gap-4 self-stretch">
				<img src={profile} alt="Profile" class="flex justify-center items-centerw-12 h-12 rounded-full" />
				<div class="card__profile__info flex flex-col items-start gap-1 flex-1">
					<h2 class="text-lg font-semibold self-stretch text-neutral-900 text-justify">{name}</h2>
					<p class="text-sm font-normal text-neutral-600">@{username}</p>
				</div>
			</div>
			<div class="card__content">
				<p class="text-base text-left font-normal text-neutral-600 self-stretch">{content}</p>
			</div>
		</div>
	);
}
