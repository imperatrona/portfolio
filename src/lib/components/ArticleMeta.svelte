<script>
	export let author;
	export let date;

	const formattedDate = new Date(date).toDateString();
</script>

<div class="meta">
	<span class="author">{author}</span>
	<span class="date">{formattedDate}</span>
</div>

<style>
	.meta{
		display: flex;
		gap: .4rem;
		font-size: .9em;
	}

	.date {
		color: rgba(var(--color-text-primary), .55);
	}
</style>
