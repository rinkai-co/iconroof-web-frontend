<script lang="ts">
  import Skeleton from "$lib/components/ui/Skeleton.svelte";
</script>

<div class="w-full py-8 md:py-16 font-sans max-w-7xl mx-auto rounded-xl overflow-hidden">
  <section class="flex relative w-full items-center min-h-[400px]">
    <div class="flex flex-col z-20 items-center px-6 py-48 w-full max-w-7xl mx-auto gap-4">
      <div class="flex flex-col gap-2 items-center w-full">
        <Skeleton class="h-10 w-64 bg-white/20" />
        <Skeleton class="h-6 w-48 bg-white/20" />
      </div>
      <Skeleton class="h-10 w-32 rounded-full bg-white/20" />
    </div>
    <div class="absolute inset-0 z-10 bg-neutral-300 animate-pulse"></div>
  </section>
</div>
