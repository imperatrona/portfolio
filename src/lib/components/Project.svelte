<div class="project">
	<slot />
</div>

<style>
	.project {
		background-color: rgb(var(--color-background-lift));
		border: 1px solid rgba(var(--color-text-primary), 0.05);
		border-radius: 2.4rem;
		padding: 0 1.2rem;
		width: 100%;
		box-sizing: border-box;
	}

	@media (min-width: 850px) {
		.project {
			margin: 0 auto;
			padding: 0 2.2rem;
		}
	}
</style>
