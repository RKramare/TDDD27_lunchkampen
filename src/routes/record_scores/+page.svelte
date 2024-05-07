<script>
	import GameSelector from '$lib/GameSelector.svelte';
	import Header from '$lib/Header.svelte';
	import { selectedGame } from '../../store';
	import { gameInfo } from '../../tmp_db.js';

	function openExternalPage() {
		if (!$selectedGame) {
			alert('Please select a game first');
			return;
		}
		const externalUrl = gameInfo[$selectedGame].url;
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
</script>

<Header />

<GameSelector />

<button on:click={openExternalPage}>Open {gameInfo[$selectedGame].name}</button>

<p>Selected game: {$selectedGame}</p>
