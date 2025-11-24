<script lang="ts">
  import Skeleton from "$lib/components/ui/Skeleton.svelte";
</script>

<div class="flex flex-col gap-6 w-full">
    <div class="flex flex-col gap-2">
        <Skeleton class="h-4 w-20" />
        <Skeleton class="h-10 w-64" />
    </div>

    <div class="grid grid-cols-1 md:grid-cols-none md:grid-flow-col md:grid-rows-4 gap-4 w-full h-[800px] md:h-[600px]">
         <!-- Mimic the grid layout -->
        <Skeleton class="md:row-span-4 h-64 md:h-full rounded-lg" />
        <Skeleton class="md:col-span-2 md:row-span-2 h-64 rounded-lg" />
        <Skeleton class="md:col-span-1 md:row-span-2 h-64 md:h-full rounded-lg" />
        <Skeleton class="md:col-span-1 md:row-span-2 h-64 md:h-full rounded-lg" />
    </div>
</div>
