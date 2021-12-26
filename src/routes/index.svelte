<script lang="ts">
	import FlippableCard from './../flippable_card/FlippableCard.svelte';
    import { Cards } from './../Cards';
</script>

<div class="mt-3 grid grid-cols-1 gap-1 md:grid-cols-3 md:gap-3 xl:grid-cols-5 justify-items-center">
    {#each Cards as card}
	    <FlippableCard card={card}/>
    {/each}
</div>
