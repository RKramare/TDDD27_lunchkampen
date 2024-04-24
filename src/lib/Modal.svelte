<script>
	let showModal = true;
</script>

{#if showModal}
	<div class="backdrop">
		<div class="modal">
			<p>Hej!</p>
			<button on:click={() => (showModal = false)}>Stäng</button>
		</div>
	</div>
{/if}

<style>
</style>
