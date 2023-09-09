<script lang="ts">
  import { scale } from "svelte/transition";
  import BoxIcon from "~icons/solar/box-bold-duotone";
  import LoadingIcon from "~icons/line-md/loading-loop";
  export let opened = false;
  let loaded = false;
  export let src =
    "https://freepngimg.com/save/169113-kitten-free-download-png-hq/1520x934";
</script>

<button
  class="grid"
  on:click={() => (opened = true)}
  style:animation="gliding-animation 7s infinite ease-in-out"
>
  {#if opened}
    <img
      in:scale
      on:load={() => (loaded = true)}
      class="col-start-1 col-end-2 row-start-1 row-end-2 h-32 rounded-lg"
      class:hidden={!loaded}
      {src}
      alt="Cat"
    />
    {#if !loaded}
      <div class="col-start-1 col-end-2 row-start-1 row-end-2" transition:scale>
        <LoadingIcon class="text-9xl bg-highlight-low rounded-lg" />
      </div>
    {/if}
  {:else}
    <div class="col-start-1 col-end-2 row-start-1 row-end-2" out:scale>
      <BoxIcon class="text-9xl text-muted hover:scale-125 transition-all" />
    </div>
  {/if}
</button>
