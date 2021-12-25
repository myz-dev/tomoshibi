<script lang="ts">
	import { Card } from "./../Cards";
	export let card: Card = new Card(2, "あ", "./../../static/a_ame01.png", "美味しそうなあめ", "あめ");
</script>

<div class="mt-4 flex flex-col space-y-5">
	<div>
		<div class="flip-card w-56 h-56">
			<div class="flip-card-inner">
				<!-- Card Front -->
				<div
					class="flip-card-front bg-sky-300 w-56 h-56 flex items-center justify-center rounded-xl shadow-md"
				>
					<p class="antialiased text-6xl font-semibold text-red-400">{card.gliph} </p>
				</div>
				<!-- Card Back -->
				<div class="flip-card-back bg-sky-50 rounded-xl flex items-center justify-center">
					<figure>
						<img class="h-36 w-36" src={card.src} alt={card.alt} />
						<figcaption class="text-3xl">{card.displayed_name}</figcaption>
					</figure>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	/* The flip card container - set the width and height to whatever you want. We have added the border property to demonstrate that the flip itself goes out of the box on hover (remove perspective if you don't want the 3D effect */
	.flip-card {
		background-color: transparent;
		perspective: 1000px; /* Remove this if you don't want the 3D effect */
	}

	/* This container is needed to position the front and back side */
	.flip-card-inner {
		position: relative;
		width: 100%;
		height: 100%;
		text-align: center;
		transition: transform 0.8s;
		transform-style: preserve-3d;
	}

	/* Do an horizontal flip when you move the mouse over the flip box container */
	.flip-card:hover .flip-card-inner {
		transform: rotateY(180deg);
	}

	/* Position the front and back side */
	.flip-card-front,
	.flip-card-back {
		position: absolute;
		width: 100%;
		height: 100%;
		-webkit-backface-visibility: hidden; /* Safari */
		backface-visibility: hidden;
	}

	/* Style the front side (fallback if image is missing) */
	.flip-card-front {
		color: black;
	}

	/* Style the back side */
	.flip-card-back {
		transform: rotateY(180deg);
	}

	/* noto-sans-jp-700 - latin_japanese */
	@font-face {
		font-family: 'Noto Sans JP';
		font-style: normal;
		font-weight: 700;
		src: url('./../../static/fonts/noto-sans-jp-v36-latin_japanese-700.eot'); /* IE9 Compat Modes */
		src: local(''),
			url('./../../static/fonts/noto-sans-jp-v36-latin_japanese-700.eot?#iefix')
				format('embedded-opentype'),
			/* IE6-IE8 */ url('./../../static/fonts/noto-sans-jp-v36-latin_japanese-700.woff2')
				format('woff2'),
			/* Super Modern Browsers */
				url('./../../static/fonts/noto-sans-jp-v36-latin_japanese-700.woff') format('woff'),
			/* Modern Browsers */ url('./../../static/fonts/noto-sans-jp-v36-latin_japanese-700.ttf')
				format('truetype'),
			/* Safari, Android, iOS */
				url('./../../static/fonts/noto-sans-jp-v36-latin_japanese-700.svg#NotoSansJP') format('svg'); /* Legacy iOS */
	}

	/* noto-sans-jp-900 - latin_japanese */
	figcaption, p {
		font-family: Noto Sans JP;
	}

</style>
