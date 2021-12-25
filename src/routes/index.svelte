<script lang="ts">
	import FlippableCard from './../flippable_card/FlippableCard.svelte';
    import { Cards } from './../Cards';
</script>

<div class="ml-4 grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-3 lg:grid-cols-5">
    {#each Cards as card}
	    <FlippableCard card={card}/>
    {/each}
</div>
