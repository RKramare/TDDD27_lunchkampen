<script>
	import user from '../user';
	let username = '';
	let password = '';
	let currentError = '';

	const login = () => {
		fetch('http://localhost:3000/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				username: username,
				password: password
			})
		})
			.then((response) => {
				if (response.status < 299) return response.json();
				if (response.status > 299) currentError = 'Fel användarnamn eller lösenord';
			})
			.then((data) => {
				if (data) user.update((val) => (val = { ...data }));
			})
			.catch((error) => {
				currentError = error;
				console.error('Error:', error);
			});
	};
</script>

<form on:submit|preventDefault={login}>
	<div>
		<label for="username">Användarnamn</label>
		<input type="text" id="username" bind:value={username} />
	</div>

	<div>
		<label for="password">Lösenord</label>
		<input type="password" id="password" bind:value={password} />
	</div>

	<button type="submit">Logga in</button>
</form>
