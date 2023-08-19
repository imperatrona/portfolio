<script lang="ts">
	export let value: string;
	export let offset = 0;
	export let animate = true;
</script>

<span class="splitting" aria-label={value}>
	{#each value.split('') as element, index}
		<span
			class="char"
			class:animated={animate}
			class:space={element === ' ' || element === ' '}
			aria-hidden="true"
			style="--char-index: {offset + index}"
		>
			{element}
		</span>
	{/each}
</span>

<style>
	.splitting {
		display: inline;
	}

	.char {
		display: inline-block;
	}

	.char.animated {
		animation: uprise 0.6s cubic-bezier(0.5, 0, 0.5, 1);
		animation-delay: calc(10ms * var(--char-index) + 50ms);
		animation-fill-mode: both;
	}

	.char.space {
		min-width: 0.3ch;
	}

	@media screen and (prefers-reduced-motion) {
		.char.animated {
			animation: none;
		}
	}

	@keyframes uprise {
		0% {
			opacity: 0;
			transform: translateY(8px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>
