<script>
	import { register } from '../authentication.js';
	import { user } from '../user';
	import { popup } from '@skeletonlabs/skeleton';

	let errorMessage = '';
	/**
	 * @type {HTMLElement}
	 */
	let popupTrigger;

	/**
	 * @param {{ preventDefault: () => void; target: { elements: { email: { value: any; }; password: { value: any; }; name: { value: any; }; }; }; }} event
	 */
	async function handleRegister(event) {
		event.preventDefault();
		const email = event.target.elements.email.value;
		const password = event.target.elements.password.value;
		const name = event.target.elements.name.value;

		try {
			const userCredential = await register(email, password, name);

			if (userCredential) {
				// The user was successfully registered
				// You can now set the user in your Svelte store
				user.set(userCredential.user);
			} else {
				// The registration failed
				errorMessage = 'Registration failed. Please check your credentials.';
				showErrorPopup();
			}
		} catch (error) {
			errorMessage =
				error instanceof Error ? error.message : 'An error occurred during registration.';
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
	<h1>Registrea nytt konto</h1>

	<form class="card variant-outline-primary flex flex-col space-y-2 p-4" on:submit={handleRegister}>
		<label for="name">Namn</label>
		<input class="input" type="text" id="name" name="name" />

		<label for="email">Email</label>
		<input class="input" type="email" id="email" name="email" />

		<label for="password">Lösenord</label>
		<input class="input" type="password" id="password" name="password" />

		<button class="variant-filled-primary btn" type="submit">Registrera</button>
	</form>
</div>

<div bind:this={popupTrigger} class="error-popup">{errorMessage}</div>
