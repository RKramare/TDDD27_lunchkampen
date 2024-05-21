<script lang="ts">
	import { minutes, seconds } from '../store';
	import { onMount } from 'svelte';
	import { OiStopwatch16 } from 'svelte-icons-pack/oi';
	import { Icon } from 'svelte-icons-pack';

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

<div class="variant-outline-surface flex items-center space-x-2 p-2 shadow">
	<Icon src={OiStopwatch16} />
	<p class="card variant-outline-primary p-2">
		{$minutes.toString().padStart(2, '0')}:{$seconds.toString().padStart(2, '0')}
	</p>
	<button type="button" class="variant-outline-primary btn" on:click={startStopwatch}
		>{running ? 'Stop' : 'Start'}</button
	>
	<button type="button" class="variant-outline-primary btn" on:click={resetStopwatch}>Reset</button>
</div>
