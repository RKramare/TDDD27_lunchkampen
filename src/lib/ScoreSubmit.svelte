<script>
	let score = [];
	const submitScore = () => {
		console.log('submit score');
	};
</script>

<form on:submit|preventDefault={submitScore}>
	<slot></slot>
</form>
