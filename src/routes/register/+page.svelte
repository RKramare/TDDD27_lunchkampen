<script>
	import Header from '$lib/Header.svelte';
	import Register from '$lib/Register.svelte';
	import { user } from '../../user.js';
	import { logout } from '../../authentication.js';

	/**
	 * @type any
	 */
	let currentUser = null;

	user.subscribe((value) => {
		currentUser = value;
	});
</script>

<Header />

{#if currentUser}
	<p>Du är inloggad som {currentUser.email}</p>
	<button class="button" on:click={logout}>Logga ut</button>
{:else}
	<Register />
{/if}
