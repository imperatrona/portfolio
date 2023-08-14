<footer>
	<div class="container">
		<a class="mail" href="mailto:hi@0h5imw.ru" aria-label="hi@0h5imw.ru">
			<svg
				width="100%"
				height="100%"
				viewBox="0 0 535 90"
				preserveAspectRatio="xMinYMid meet"
				xmlns="http://www.w3.org/2000/svg"
				xmlns:xlink="http://www.w3.org/1999/xlink"
				role="presentation"
			>
				<text
					x="-4"
					y="75"
					font-weight="350"
					font-size="85.2"
					fill="rgb(var(--color-text-primary))"
					role="presentation">hi</text
				>
				<text
					x="58"
					y="75"
					font-weight="350"
					font-size="85.2"
					fill="rgba(var(--color-text-primary), 0.6)"
					role="presentation">@0h5imw.ru</text
				>
			</svg>
		</a>
		<div class="footer">
			<p class="copyright meta-block">
				&#169; {new Date().getFullYear()}
				<a href="https://twitter.com/0h5imw">Valentina Botvina</a>
			</p>
			<p class="avialability meta-block">
				<span class="status">⦁</span>
				Online
			</p>
			<p class="location meta-block">Tbilisi, Georgia</p>
		</div>
	</div>
</footer>

<style>
	footer {
		margin-top: 200px;
	}
	.mail {
		display: block;
	}
	.mail:hover {
		text-decoration: none;
		background-color: none;
		box-shadow: none;
		background-color: inherit;
	}

	.footer {
		display: flex;
		gap: 8px;
	}

	.meta-block {
		color: rgba(var(--color-text-primary), 0.6);
	}

	.status {
		color: #02ff49;
	}

	@media (max-width: 860px) {
		.footer {
			flex-direction: row;
			flex-wrap: wrap;
		}

		.footer p {
			margin: 0;
		}
	}

	@media (min-width: 860px) {
		.footer {
			justify-content: space-between;
		}

		.copyright,
		.location {
			width: 24ch;
		}

		.location {
			text-align: right;
		}
	}
</style>
