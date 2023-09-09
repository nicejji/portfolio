<script lang="ts">
	import { spring } from 'svelte/motion';

	const eyesTranslate = spring(
		{
			x: 0,
			y: 0,
			scale: 1
		},
		{
			stiffness: 0.1,
			damping: 0.5
		}
	);
	let browsTranslate = 0;

	const onMove = (e: PointerEvent) => {
		$eyesTranslate.x = (e.clientX / window.innerWidth - 0.5) * 100;
		$eyesTranslate.y = (e.clientY / window.innerHeight - 0.5) * 100;
	};
</script>

<div
	class="bottom-8 right-8 absolute flex flex-col h-48 w-48 bg-text rounded-full pt-8 px-6"
	style:animation="gliding-animation 7s infinite ease-in-out"
>
	<div class="h-1/2 flex justify-center items-center">
		<div class="flex flex-col h-full w-full justify-center items-center gap-5">
			<div
				style:transform={`translateY(-${browsTranslate}%)`}
				class="h-2 rounded-full w-8 bg-base transition-transform"
			/>
			<div
				style:transform={`translate(${$eyesTranslate.x}%, ${$eyesTranslate.y}%) scale(${$eyesTranslate.scale})`}
				class="h-8 aspect-square rounded-full bg-base"
			/>
		</div>
		<div class="flex flex-col h-full w-full justify-center items-center gap-5">
			<div
				style:transform={`translateY(-${browsTranslate}%)`}
				class="h-2 rounded-full w-8 bg-base transition-transform"
			/>
			<div
				style:transform={`translate(${$eyesTranslate.x}%, ${$eyesTranslate.y}%) scale(${$eyesTranslate.scale})`}
				class="h-8 aspect-square rounded-full bg-base"
			/>
		</div>
	</div>
</div>

<svelte:window
	on:pointermove={onMove}
	on:pointerdown={() => ((browsTranslate = 150), ($eyesTranslate.scale = 1.2))}
	on:pointerup={() => ((browsTranslate = 0), ($eyesTranslate.scale = 1))}
/>

<style>
	@keyframes -global-gliding-animation {
		50% {
			transform: translateY(-30px);
		}
	}
</style>
