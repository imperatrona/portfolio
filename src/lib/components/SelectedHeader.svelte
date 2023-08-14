<div class="container selected">
	<p class="title">"Selected works"</p>
	<p class="years">2015<span>-</span>2022</p>
</div>

<style>
	.selected {
		display: flex;
		flex-direction: column;
		font-weight: 300;
		gap: 4px;
	}

	.selected > .title {
		font-size: 24px;
		margin: 0;
	}

	@media (min-width: 850px) {
		.selected {
			justify-content: space-between;
			flex-direction: row;
		}
		.selected > .title {
			font-size: 40px;
			margin: 0;
		}
		.years {
			flex-basis: 350px;
		}
	}

	.years {
		font-size: 40px;
		display: flex;
		margin: 0;
	}

	.years > span {
		position: relative;

		visibility: hidden;
		width: 100%;
	}

	.years > span::before {
		visibility: visible;
		position: absolute;
		content: '';
		background-color: rgb(var(--color-text-primary));
		left: 0px;
		right: 0px;
		top: 50%;
		transform: translateY(-50%);
		height: 2.5px;
		border-radius: 0.5px;
		margin: 0 10px;
	}
</style>
