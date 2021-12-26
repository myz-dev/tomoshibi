<script lang="ts">
	import { onMount } from 'svelte';
	import { Card } from './../Cards';
	import FaVolumeUp from 'svelte-icons/fa/FaVolumeUp.svelte';
	export let card: Card = new Card(
		2,
		'あ',
		'./../../static/a_ame01.png',
		'美味しそうなあめ',
		'あめ'
	);

	let paused = false;
	let volume = 0.3;
	let currentTime = 0;
	let muted = false;
	function play_soundfile(): void {
		paused = false;
	}
	onMount(() => {
		paused = true;
		muted = false;
	});


</script>

<div class="mt-4 flex flex-col space-y-5">
	<div>
		<div class="flip-card w-56 h-56">
			<div class="flip-card-inner">
				<!-- Card Front -->
				<div
					class="flip-card-front bg-sky-300 w-56 h-56 flex items-center justify-center rounded-xl shadow-md"
				>
					<p class="antialiased text-6xl font-semibold text-red-400">{card.glyph}</p>
				</div>
				<!-- Card Back -->
				<div class="flip-card-back bg-sky-50 rounded-xl flex flex-col items-center justify-center">
					<button
						on:click={() => {currentTime = 0; paused = false}}
						class="ml-40 mt-3 h-6 w-6 text-slate-800 hover:shadow-md hover:cursor-pointer hover:text-gray-600"
					>
						<FaVolumeUp />
					</button>

					<figure>
						<img class="h-36 w-36" src={card.src} alt={card.alt} />
						<figcaption class="text-3xl">
							<span> {card.displayed_name}</span>
						</figcaption>
					</figure>
					<!-- <p class="text-3xl">{card.displayed_name}</p> -->
					<audio preload="auto" bind:paused bind:volume bind:currentTime bind:muted>
						<source src="test_sound.mp3" type="audio/mp3" />
						<p>Your browser does not support audio elements. Consider updating your browser!</p>
					</audio>
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

	/* noto-sans-jp-900 - latin_japanese */
	figcaption,
	p {
		/* font-family: 'Noto Sans JP', sans-serif; */
		font-family: 'Montserrat', 'Mplus 1p', 'Hiragino Sans', 'Hiragino Kaku Gothic Pro', '游ゴシック',
			'游ゴシック体', YuGothic, 'Yu Gothic', 'ＭＳ ゴシック', 'MS Gothic', sans-serif;
	}
</style>
