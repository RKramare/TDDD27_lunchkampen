<script>
	import user from '../user';
	import Login from '$lib/Login.svelte';
	import Card from '$lib/Card.svelte';
	import Modal from '$lib/Modal.svelte';
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';

	$: isLoggedIn = $user === null ? false : true;

	const logout = () => {
		user.update((val) => (val = null));
	};
</script>

<Header />
<Card>
	<h1>Välkommen te LunchKampen</h1>

	{#if isLoggedIn}
		<h2>Hej {$user.firstname}</h2>
		<button on:click={logout}>Logga ut</button>
	{:else}
		<Login />
	{/if}
</Card>

<iframe src="https://contexto.me/" frameborder="3" title="Contexto"></iframe>
<Footer />

<style>
	/* Add any necessary styling for your iframe */
	.iframe {
		width: 100%;
		height: 400px; /* Set the desired height */
	}
</style>
