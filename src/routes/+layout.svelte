<script>
	import '../app.pcss';
	import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	import { onMount } from 'svelte';
	import { games, gamesLoading } from '../store';
	import { readGames } from '../firestore';

	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });

	onMount(async () => {
		const gamesData = await readGames();

		/**
		 * @typedef {Object} Game
		 * @property {number} index
		 * @property {string} gameId
		 * @property {string} name
		 * @property {string} url
		 * @property {boolean} isEmbeded
		 */

		/** @type {Object.<string, Game>} */
		const structuredGames = gamesData.reduce((acc, gameData) => {
			acc[gameData.gameId] = {
				index: gameData.index,
				gameId: gameData.gameId || 'defaultGameId',
				name: gameData.name || 'defaultName',
				url: gameData.url || 'defaultUrl',
				isEmbeded: gameData.isEmbeded || false
			};
			return acc;
		}, {});
		games.set(structuredGames);
		gamesLoading.set(false);
		console.log(structuredGames);
	});
</script>

<div class="main-content">
	<slot></slot>
</div>

<style>
	.main-content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100vh;
	}
</style>
