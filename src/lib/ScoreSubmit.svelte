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
	<div class="flex items-center space-x-4 pt-5">
		<div class="flex items-baseline">
			<p class="mr-2">Points:</p>
			<input
				type="number"
				bind:value={$score}
				class="focus:shadow-outline rounded-md border bg-inherit px-3 py-2"
			/>
		</div>
		<StopWatch />
		<button type="submit" class="variant-filled-primary btn ml-2 p-2">Submit</button>
	</div>
</form>
