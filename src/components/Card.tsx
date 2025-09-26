import { memo } from 'preact/compat';

interface CardProps {
	profile: string;
	name: string;
	username: string;
	content: string;
}

export const Card = memo(function Card({ profile, name, username, content }: CardProps) {
	return (
		<article 
			class="card flex flex-col w-[340px] bg-white p-6 rounded-lg shadow-md items-start gap-4 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2"
			role="article"
			aria-labelledby={`card-title-${username}`}
			tabIndex={0}
		>
			<header class="card__profile flex flex-row items-center gap-4 self-stretch">
				<img 
					src={profile} 
					alt={`Profile picture of ${name}`}
					class="flex justify-center items-center w-12 h-12 rounded-full object-cover"
					loading="lazy"
					decoding="async"
				/>
				<div class="card__profile__info flex flex-col items-start gap-1 flex-1">
					<h2 
						id={`card-title-${username}`}
						class="text-lg font-semibold self-stretch text-neutral-900 text-justify"
					>
						{name}
					</h2>
					<p class="text-sm font-normal text-neutral-600" aria-label={`Username: ${username}`}>
						@{username}
					</p>
				</div>
			</header>
			<section class="card__content" aria-label="Testimonial content">
				<p class="text-base text-left font-normal text-neutral-600 self-stretch">
					{content}
				</p>
			</section>
		</article>
	);
});
