<script lang="ts">
	import { minutes, seconds } from '../store';
	import { onMount } from 'svelte';

	let timer: number | NodeJS.Timeout;
	let running = false;

	function startStopwatch() {
		if (running) {
			clearInterval(timer);
			running = false;
		} else {
			timer = setInterval(() => {
				if ($seconds < 59) {
					$seconds++;
				} else {
					$seconds = 0;
					$minutes++;
				}
			}, 1000);
			running = true;
		}
	}

	function resetStopwatch() {
		clearInterval(timer);
		$minutes = 0;
		$seconds = 0;
		running = false;
	}

	onMount(() => {
		return () => clearInterval(timer);
	});
</script>

<div class="card variant-ringed-primary flex space-x-9">
	<h1>{$minutes.toString().padStart(2, '0')}:{$seconds.toString().padStart(2, '0')}</h1>
	<button type="button" class="bg-primary-900" on:click={startStopwatch}
		>{running ? 'Stop' : 'Start'}</button
	>
	<button type="button" on:click={resetStopwatch}>Reset</button>
</div>
