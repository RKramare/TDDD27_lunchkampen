<script>
	import { ListBox, ListBoxItem } from '@skeletonlabs/skeleton';
	import { selectedGame } from '../store';
</script>

<ListBox class="flex">
	<ListBoxItem bind:group={$selectedGame} name="medium" value="contexto">Contexto</ListBoxItem>
	<ListBoxItem bind:group={$selectedGame} name="medium" value="wordle">Wordle</ListBoxItem>
	<ListBoxItem bind:group={$selectedGame} name="medium" value="redactle">Redactle</ListBoxItem>
</ListBox>
