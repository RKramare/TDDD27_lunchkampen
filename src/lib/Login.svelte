<script>
	import { user } from '../user';
	import { login } from '../authentication.js';
	import { popup } from '@skeletonlabs/skeleton';
	let email = '';
	let password = '';
	let errorMessage = '';
	/**
	 * @type {HTMLElement}
	 */
	let popupTrigger;

	/**
	 * @param {{ preventDefault: () => void; target: { elements: { email: { value: any; }; password: { value: any; }; }; }; }} event
	 */
	async function handleLogin(event) {
		event.preventDefault();
		const email = event.target.elements.email.value;
		const password = event.target.elements.password.value;

		try {
			const userCredential = await login(email, password);

			if (userCredential) {
				// The user was successfully logged in
				// You can now set the user in your Svelte store
				user.set(userCredential.user);
			} else {
				// The login failed
				errorMessage = 'Login failed. Please check your credentials.';
				showErrorPopup();
			}
		} catch (/** @type any */ error) {
			errorMessage = error.message || 'An error occurred during login.';
			showErrorPopup();
		}
	}

	function showErrorPopup() {
		popup(popupTrigger, {
			event: 'click',
			target: 'popupTrigger',
			placement: 'bottom'
		});
	}
</script>

<div class="flex flex-col items-center space-y-2">
	<h1>Logga in</h1>

	<form class="card variant-outline-primary flex flex-col space-y-2 p-4" on:submit={handleLogin}>
		<label for="email">Email</label>
		<input class="input" type="email" id="email" bind:value={email} />
		<label for="password">Lösenord</label>
		<input class="input" type="password" id="password" bind:value={password} />
		<button class="variant-filled-primary btn" type="submit">Logga in</button>
	</form>
</div>

<a class="cursor-pointer text-xs text-primary-700 underline" href="/register"
	>Registrera nytt konto.</a
>

<div bind:this={popupTrigger} class="error-popup">{errorMessage}</div>
