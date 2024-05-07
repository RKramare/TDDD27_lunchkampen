<script>
	import { score, minutes, seconds } from '../store.js';
	import StopWatch from '$lib/StopWatch.svelte';
	import { storeScores } from '../firestore.js';

	const submitScore = () => {
		storeScores($score, $minutes, $seconds);
		console.log($score, $minutes, $seconds);
	};
</script>

<form on:submit|preventDefault={submitScore}>
	<nav class="flex size-2">
		<div class="flex items-center">
			<p class="mr-2">Points:</p>
			<input
				type="number"
				bind:value={$score}
				class="focus:shadow-outline rounded-md border bg-inherit px-3 py-2"
			/>
		</div>
		<StopWatch />
		<button type="submit" class="ml-2">Submit</button>
	</nav>
</form>

<style>
	nav {
		display: flex;
		justify-content: space-evenly;
		align-items: stretch;
		padding: 1rem;
		position: fixed;
		bottom: 40px;
		left: 0;
		width: 100%;
		z-index: 10;
		view-transition-name: header;
		box-sizing: border-box;
	}
</style>
