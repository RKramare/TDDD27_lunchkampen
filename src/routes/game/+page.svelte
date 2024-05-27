<script>
	import GameSelector from '$lib/GameSelector.svelte';
	import Header from '$lib/Header.svelte';
	import ScoreSubmit from '$lib/ScoreSubmit.svelte';
	import { selectedGame, games, gamesLoading } from '../../store';

	function openExternalPage() {
		if (!$selectedGame) {
			alert('Please select a game first');
			return;
		}
		const externalUrl = $games[$selectedGame]?.url;
		// Calculate the position of the new window relative to the current window
		const left = window.screenX + 100; // Adjust the left position as needed
		const top = window.screenY + 100; // Adjust the top position as needed
		// Open the external page in a new window with specified size and position
		const newWidth = window.innerWidth - 100;
		const newHeight = window.innerHeight - 100;
		window.open(
			externalUrl,
			'_blank',
			`width=${newWidth},height=${newHeight},left=${left},top=${top}`
		);
	}
	console.log('Från game page', $games, $selectedGame);
</script>

<Header />
<GameSelector />

{#if $gamesLoading}
	<div>Loading...</div>
{:else if $selectedGame && $games[$selectedGame]?.isEmbeded}
	<div class="card variant-ringed-primary">
		<iframe src={$games[$selectedGame]?.url} frameborder="3" title={$selectedGame} />
	</div>
{:else if $selectedGame}
	<div style="display: flex; justify-content: center; align-items: center;">
		<button class="variant-ghost-primary justify-center rounded p-2" on:click={openExternalPage}
			>Öppna {$games[$selectedGame]?.name} i en ny flik</button
		>
	</div>
{/if}

<ScoreSubmit />

<style>
	div {
		width: 95%;
		height: 70%;
	}
	iframe {
		width: 100%;
		height: 100%;
		padding: 10px;
	}
</style>
