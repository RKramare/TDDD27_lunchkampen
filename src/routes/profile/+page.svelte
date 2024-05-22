<script>
	import Header from '$lib/Header.svelte';
	import { user } from '../../user.js';
	import { logout } from '../../authentication.js';
	import { storeGame } from '../../firestore.js';
	// console.log('norm', { user });
	// console.log($user);

	let gameName = '';
	let url = '';
	let gameId = '';
	/**
	 * @type boolean
	 */
	let isEmbeded = false;

	/**
	 * @type any
	 */
	let currentUser = null;

	user.subscribe((value) => {
		currentUser = value;
	});

	/**
	 * @param {{ preventDefault: () => void; }} event
	 */
	async function handleStoreGame(event) {
		event.preventDefault();
		await storeGame(gameId, $user.uid, gameName, url, isEmbeded);
	}
</script>

<Header />

{#if currentUser.role === 'admin'}
	<h1>Admin</h1>
	<h1>{$user.name}</h1>
	<h1>{$user.email}</h1>

	<div class="flex flex-col items-center space-y-2">
		<h1>Registrera spel</h1>

		<form
			class="card variant-outline-primary flex flex-col space-y-2 p-4"
			on:submit={handleStoreGame}
		>
			<label for="gameId">gameId (typ wordle)</label>
			<input class="input" type="text" id="gameId" bind:value={gameId} />
			<label for="gameName">Spelets namn (typ Wordle)</label>
			<input class="input" type="text" id="gameName" bind:value={gameName} />
			<label for="url">Url</label>
			<input class="input" type="text" id="url" bind:value={url} />
			<label for="isEmbeddable">Går att embedda (om ej vet, välj nej)</label>

			<div class="flex space-x-4">
				<label class="flex items-center space-x-2">
					<input
						class="radio"
						type="radio"
						bind:group={isEmbeded}
						name="radio-direct"
						value={true}
					/>
					<p>Ja</p>
				</label>
				<label class="flex items-center space-x-2">
					<input
						class="radio"
						type="radio"
						bind:group={isEmbeded}
						name="radio-direct"
						value={false}
					/>
					<p>Nej</p>
				</label>
			</div>

			<button class="variant-filled-primary btn" type="submit">Lägg till</button>
		</form>
	</div>
{:else}
	<h1>{$user.name}</h1>
	<h1>{$user.email}</h1>
{/if}
