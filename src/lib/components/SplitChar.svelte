<script>
	export let text;
	export let offset = 0;
</script>

<span class="splitting" aria-label="text">
	{#each text.split('') as char, i}
		<span class="char" aria-hidden="true" style="--char-index: {offset + i}">{char}</span>
	{/each}
</span>
