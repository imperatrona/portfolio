<header class="header">
	<a class="logo" href="/" title="Home">
		<img class="avatar" src={'/avatar.jpg'} alt="" height="50" width="50" />
	</a>
	<div class="bubble" role="presentation">
		<!-- <span>👋💖🌞</span> -->
		<img
			class="bubble-emojies"
			src={'/vulcan-salute_medium-light-skin-tone_1f596-1f3fc_1f3fc.png'}
			alt=""
		/>
		<div id="glow" role="presentation" />
	</div>
	<!-- <a href="/writings">Articles</a> -->
</header>

<style>
	.header {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		gap: 24px;
		margin-bottom: 50px;
	}

	.logo {
		display: flex;
		flex-direction: row;
		border-radius: 100px;
		overflow: hidden;
		animation: avatar 0.6s ease-out;
		animation-fill-mode: both;
	}

	.avatar {
		transition: transform 0.2s ease-in-out;
	}

	.logo:hover .avatar {
		transform: scale(1.04);
	}

	/* bubble */
	.bubble {
		-webkit-mask-image: url(/bubble.svg);
		mask-image: url(/bubble.svg);
		-webkit-mask-repeat: no-repeat;
		mask-repeat: no-repeat;
		/* width: 126px; */
		height: 50px;

		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		user-select: none;

		border-top-right-radius: 50px;
		border-bottom-right-radius: 50px;

		padding: 0 14px 0 20px;

		transform-origin: 0% 100%;
		animation: bubble 0.6s ease-out;
		animation-delay: 0.2s;
		animation-fill-mode: both;
	}

	/* .bubble span { */
	/* font-size: 24px; */
	/* letter-spacing: 4px; */
	/* margin-left: 8px;
		margin-top: 4px; */

	/* margin: 4px 20px 0 24px; */
	/* } */

	.bubble-emojies {
		display: block;
		width: auto;
		height: calc(100% - 16px);
	}

	#glow {
		position: absolute;
		height: 40px;
		width: 40px;
		background-color: #9d22fd;
		filter: blur(26px);
		top: 40px;
		left: -13px;
		user-select: none;
		transition: all 0.5s ease-in-out;

		z-index: -1;
	}

	@media screen and (prefers-color-scheme: dark) {
		#glow {
			background-color: #beacd0;
		}
	}

	@keyframes avatar {
		0% {
			opacity: 0;
			scale: 0.8;
		}
		80% {
			opacity: 1;
			scale: 1.01;
		}
		100% {
			scale: 1;
		}
	}

	@keyframes bubble {
		0% {
			opacity: 0;
			scale: 0.8;
			rotate: 10deg;
		}
		80% {
			opacity: 1;
			scale: 1.01;
		}
		100% {
			scale: 1;
		}
	}
</style>
