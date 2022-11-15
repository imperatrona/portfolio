<script>
	import ProfileImage from './Horny/IMG-02.png?w=540;780;1400&format=avif;webp;png&meta&quality=90';
	import HomeImage from './Horny/IMG-01.png?w=780;1400:1800&format=avif;webp;png&meta&quality=90';
	import Image from '$lib/components/Image.svelte';
	import HeroIcon from './Horny/HeroIcon.svelte';
</script>

<div class="project">
	<div class="grid">
		<div class="card hero">
			<div class="hero_image">
				<HeroIcon />
			</div>
			<h2>Horny</h2>
			<p>
				TikTok like app for adult content. With lot’s of monetization mechanics: memberships, pay
				per view and more.
			</p>
			<div class="meta">
				<span>Mobile app</span>
				<span>2022</span>
			</div>
		</div>
		<div class="card">
			<Image image={ProfileImage} alt="Profile" />
		</div>
	</div>
	<div class="card">
		<Image image={HomeImage} alt="The Ornithologist poster" />
	</div>
</div>

<style>
	.project {
		background-color: rgb(var(--color-background-lift));
		border: 1px solid rgba(var(--color-text-primary), 0.05);
		border-radius: 2.4rem;
		padding: 1.2rem;
		width: 100%;
		box-sizing: border-box;

		display: flex;
		flex-direction: column;
		gap: 1.2rem;
	}

	.grid {
		display: grid;
		gap: 1.2rem;
	}
	.card {
		border-radius: 1.2rem;
		overflow: hidden;
		background-color: rgb(28, 28, 28);

		overflow: hidden;
	}

	.hero {
		--padding-size: 24px;
		padding: var(--padding-size);
		display: flex;
		flex-direction: column;
	}

	.hero > h2 {
		margin: 0;
		font-size: 48px;
	}

	.hero_image {
		margin: calc(-1 * var(--padding-size));
		margin-bottom: -24px;
	}

	.meta {
		margin-top: auto;
		opacity: 0.7;
		display: flex;
		justify-content: space-between;
	}

	@media (min-width: 860px) {
		.project {
			margin: 0 auto;
			padding: 1.2rem 2.2rem;
		}

		.project > .card,
		.project > .grid {
			margin-left: -1rem;
			margin-right: -1rem;
		}

		.grid {
			grid-template-columns: repeat(2, 1fr);
		}

		.hero {
			--padding-size: 3vw;
		}
	}
	@media (min-width: 1200px) {
		.hero {
			--padding-size: 54px;
		}
	}
</style>
