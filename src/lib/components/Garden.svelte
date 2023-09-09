<script lang="ts">
	import Kitten from './Kitten.svelte';

	let innerWidth: number;
	let innerHeight: number;

	export let images: string[];
</script>

{#each images as src}
	{@const x = Math.random() * innerWidth * 0.8}
	{@const y = Math.random() * innerHeight * 0.8}
	<div style:position="absolute" style:left={`${x}px`} style:top={`${y}px`}>
		<Kitten {src} />
	</div>
{/each}

<svelte:window bind:innerWidth bind:innerHeight />
