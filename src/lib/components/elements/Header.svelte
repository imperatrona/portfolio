<header class="header">
	<a class="logo" href="/" title="Home">
		<img class="avatar" src={'/avatar.jpg'} alt="" height="50" width="50" />
	</a>
	<div class="bubble" role="presentation">
		<span>👋💖🌞</span>
		<div id="glow" role="presentation" />
	</div>
	<!-- <a href="/writings">Articles</a> -->
</header>

<style>
	.header {
		display: flex;
		align-items: center;
		gap: 24px;
		margin-bottom: 50px;
	}

	.logo {
		display: flex;
		flex-direction: row;
		border-radius: 100px;
		overflow: hidden;
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
		width: 126px;
		height: 50px;

		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		user-select: none;
	}

	.bubble span {
		font-size: 24px;
		letter-spacing: 4px;
		margin-left: 8px;
		margin-top: 4px;
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
	}
</style>
