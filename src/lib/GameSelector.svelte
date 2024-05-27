<script>
	import { ListBox, ListBoxItem } from '@skeletonlabs/skeleton';
	import { selectedGame, games, gamesLoading } from '../store';

	$: console.log('GS', $selectedGame);
</script>

{#if $gamesLoading}
	<div>Loading...</div>
{:else}
	<ListBox class="flex space-x-2">
		{#each Object.values($games) as game}
			<ListBoxItem bind:group={$selectedGame} name="medium" value={game.gameId}
				>{game.name}</ListBoxItem
			>
		{/each}
	</ListBox>
{/if}
