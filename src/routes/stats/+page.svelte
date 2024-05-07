<script>
	import Header from '$lib/Header.svelte';
	import { readScores } from '../../firestore';

	let scores = []; // Initialize scores as an empty array

	// Call the asynchronous function and update scores when it resolves
	readScores().then((data) => {
		scores = data; // Update scores with the data from the asynchronous function
	});
</script>

<Header />

<h1>Statistik</h1>

{#if scores.length > 0}
	<ul>
		{#each scores as score}
			<li>{JSON.stringify(score)}</li>
			<!-- Display each score as JSON for now -->
		{/each}
	</ul>
{:else}
	<p>Loading...</p>
{/if}
