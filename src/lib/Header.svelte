<script>
</script>

<header>
	<a href="/">LunchKampen</a>
	<nav>
		<ul>
			<li><a href="/game">Spela</a></li>
			<li><a href="/stats">Statistik</a></li>
			<li><a href="/record_scores">Registrera poäng</a></li>
			<li><a href="/login">Logga in</a></li>
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
