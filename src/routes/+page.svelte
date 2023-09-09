<script lang="ts">
	import LookWidget from '$lib/components/LookWidget.svelte';
	import Garden from '$lib/components/Garden.svelte';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import type { PageData } from './$types';

	export let data: PageData;

	let mounted = false;

	const typeWriter = (node: Element, { speed = 1.5 }) => {
		const valid = node.childNodes.length === 1 && node.childNodes[0].nodeType === Node.TEXT_NODE;

		if (!valid) {
			throw new Error(`This transition only works on elements with a single text node child`);
		}

		const text = node.textContent as string;
		const duration = text.length / (speed * 0.01);

		return {
			duration,
			delay: 300,
			tick: (t: number) => {
				const i = Math.trunc(text.length * t);
				node.textContent = text.slice(0, i);
			}
		};
	};

	onMount(() => {
		mounted = true;
	});

	let headerEnded = false;
</script>

<Garden images={data.images} />

<div class="flex flex-col gap-5 justify-center">
	{#if mounted}
		<span
			class:text-5xl={headerEnded}
			on:introend={() => (headerEnded = true)}
			transition:typeWriter={{}}
			class="text-7xl font-bold transition-all">Hello, I'm Developer</span
		>
	{/if}
	{#if headerEnded}
		<div transition:fly>
			<span class="text-3xl"> Real? :) </span>
		</div>
	{/if}
</div>
<LookWidget />
