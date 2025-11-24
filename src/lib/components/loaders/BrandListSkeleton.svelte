<script lang="ts">
  import Skeleton from "$lib/components/ui/Skeleton.svelte";

  interface Props {
    count?: number;
  }

  let { count = 3 }: Props = $props();
</script>

<div class='w-full py-8 md:py-16 max-w-7xl mx-auto'>
  <div class='flex flex-col items-center justify-center gap-6'>
    <div class='text-center w-full flex justify-center'>
      <Skeleton class='h-10 w-64 mb-4' />
    </div>
    <div class="flex gap-4 md:gap-6">
       {#each Array(count) as _, i}
         <div class="flex flex-col items-center">
            <Skeleton class="mb-4 w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-md" />
            <Skeleton class="h-4 w-20" />
         </div>
       {/each}
    </div>
  </div>
</div>
