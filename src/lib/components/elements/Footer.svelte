<script>
	import SplitText from './SplitText.svelte';
</script>

<footer>
	<span class="copyright"><SplitText value="&#169; 2015 – {new Date().getFullYear()}" /></span>
	<!-- <span>{' · '}</span> -->
	<span>
		<a href="https://twitter.com/0h5imw" target="_blank" rel="noopener noreferrer">
			<SplitText value="@0h5imw" offset={10} />
		</a>
	</span>
	<!-- <i>Last commited at {new Date().toLocaleDateString('en', { dateStyle: 'full' })}</i> -->
</footer>

<style>
	a {
		text-decoration: underline solid red 8px;
		text-underline-offset: 4px;
	}
	footer {
		display: flex;
		margin-top: auto;
		gap: 32px;
	}
</style>
