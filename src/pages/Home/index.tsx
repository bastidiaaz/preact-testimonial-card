import preactLogo from '../../assets/preact.svg';
import profile from '../../assets/profile-thumbnail.png';
import { Card } from '../../components/Card';
import './style.css';

export function Home() {
	return (
		<div class="home">
			<section class="components">
				<Card
					profile={profile}
					name="Sarah Dole"
					username="sarahdole"
					content="I've been searching for high-quality abstract images for my design projects, and I'm thrilled to have found this platform. The variety and depth of creativity are astounding!"
				/>
			</section>
		</div>
	);
}
