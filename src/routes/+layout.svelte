<script lang="ts">
  import "../app.css";
  import "@fontsource-variable/fira-code";
</script>

<div class="flex flex-col h-full p-5">
  <div class="flex justify-center bg-highlight-low rounded-lg p-3">
    <button
      class=" group/logo flex items-center font-bold bg-iris text-base py-1 px-2 transition-all hover:bg-base hover:text-iris border-transparent border-4 hover:border-iris active:scale-90"
    >
      <span>nnicejji</span>
      <span class="transition-all group-hover/logo:px-3">/</span>
      <span>dev</span>
    </button>
  </div>
  <div class="flex h-full">
    <slot />
  </div>
</div>
