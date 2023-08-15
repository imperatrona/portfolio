<script lang="ts">
	export let text = '';
</script>

<button class="btn">
	{text}
	<div class="glow" role="presentation">
		<span id="bubble1" role="presentation" />
		<span id="bubble2" role="presentation" />
		<span id="bubble3" role="presentation" />
	</div>
</button>

<style>
	.btn {
		position: relative;
		display: inline-block;

		border: 0;
		background-color: inherit;

		overflow: hidden;
		border-radius: 100px;
		font-size: 1.05rem;
		padding: 0.725rem 1.2rem;
		line-height: 1em;

		transition: transform ease-in-out 0.2s;
		box-shadow: 0px 0px 0px 1px #ffffff0d inset;

		min-width: 156px;

		color: rgb(var(--color-text-primary));
	}

	.glow > span {
		position: absolute;
		height: 40px;
		width: 40px;

		filter: blur(25px);
		z-index: -1;

		transition: all ease-in-out 0.2s;
	}

	#bubble1 {
		background-color: #9d22fd;

		left: 14px;
		bottom: -11px;
	}

	#bubble2 {
		background-color: #299bcc;

		right: 47px;
		top: -28px;
	}

	#bubble3 {
		background-color: #eeb155;

		right: 8px;
		bottom: -19px;
	}

	@media (hover: hover) {
		.btn:hover {
			transform: scale(1.05);
		}
		.btn:hover .glow > span {
			filter: blur(30px);
		}
	}
</style>
