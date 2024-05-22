<script>
	import Header from '$lib/Header.svelte';
	import { user } from '../../user.js';
	console.log('norm', { user });
	console.log($user);
</script>

<Header />
<h1>{$user.email}</h1>
