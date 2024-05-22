<script>
	import { user } from '../user.js';
	import { Avatar, popup } from '@skeletonlabs/skeleton';
	import { logout } from '../authentication.js';
	import Login from '$lib/Login.svelte';
	import { LuUser } from 'svelte-icons-pack/lu';
	import { Icon } from 'svelte-icons-pack';

	/** @type {import('@skeletonlabs/skeleton').PopupSettings} */
	const popupIsLoggedIn = {
		event: 'click',
		target: 'popupIsLoggedIn',
		placement: 'top'
	};
	/** @type {import('@skeletonlabs/skeleton').PopupSettings} */
	const popupDoLogdIn = {
		event: 'click',
		target: 'popupDoLogdIn',
		placement: 'top'
	};
</script>

<header class="flex content-center align-middle">
	<a href="/">LunchKampen</a>
	<nav>
		<ul>
			<li><a href="/game">Spela</a></li>
			<li><a href="/stats">Statistik</a></li>
			<li><a href="/record_scores">Registrera poäng</a></li>
			{#if $user}
				<div use:popup={popupIsLoggedIn}>
					<Avatar
						width="w-14"
						initials={$user?.name?.split(' ')[0] ?? 'JD'}
						border="border-4 border-surface-300-600-token hover:!border-primary-500"
						cursor="cursor-pointer"
					/>
				</div>
				<div class="card variant-outline-primary p-4" data-popup="popupIsLoggedIn">
					<p>Inloggad som {$user.name}</p>
					<button class="variant-filled-primary btn"><a href="/profile">Profil</a></button>
					<button class="variant-outlined-primary btn" on:click={logout}
						><a href="/">Logga ut</a></button
					>
					<div class="variant-filled-primary arrow" />
				</div>
			{:else}
				<div use:popup={popupDoLogdIn}>
					<Avatar
						width="w-12"
						border="border-4 border-surface-300-600-token hover:!border-primary-500"
						cursor="cursor-pointer"
					>
						<Icon src={LuUser} />
					</Avatar>
				</div>
				<div class="card variant-outline-primary p-4" data-popup="popupDoLogdIn">
					<Login />
					<div class="variant-filled-primary arrow" />
				</div>
			{/if}
		</ul>
	</nav>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
		align-items: stretch;
		padding: 1rem;
		position: fixed;
		top: 0;
		width: 100%;
		z-index: 10;
		view-transition-name: header;
	}

	nav ul {
		display: flex;
		list-style: none;
	}

	nav ul li {
		margin-right: 1rem;
	}

	nav ul li a {
		text-decoration: none;
	}
</style>
