<script lang="ts">
  import Skeleton from "$lib/components/ui/Skeleton.svelte";
</script>

<section class="flex flex-col items-start justify-center mt-4 min-w-full py-2 px-6 md:px-8">
  <Skeleton class="h-12 w-12 mb-4 rounded-md bg-neutral-200" />
  <Skeleton class="h-8 w-64 mb-2" />
  <Skeleton class="h-6 w-96 mt-2 mb-4" />
  <div class="flex flex-col gap-2 w-full">
    {#each [1, 2, 3] as i}
      <div class="flex justify-between p-2 border-b border-neutral-200">
        <Skeleton class="h-6 w-3/4" />
        <Skeleton class="h-6 w-6 rounded-full" />
      </div>
    {/each}
  </div>
</section>
