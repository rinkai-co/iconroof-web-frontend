<script lang="ts">
  import Skeleton from "$lib/components/ui/Skeleton.svelte";

  interface Props {
    fullScreen?: boolean;
  }

  let { fullScreen }: Props = $props();
</script>

<section class="flex relative h-full min-w-screen items-end -mt-16 md:-mt-20 font-sans {fullScreen ? 'min-h-screen' : 'min-h-[600px]'}">
  <div class="flex flex-col z-20 p-6 w-full md:max-w-7xl lg:mx-auto lg:mb-4 pt-96 gap-4">
    <Skeleton class="h-6 w-48 bg-white/80" />
    <Skeleton class="h-10 w-3/4 md:w-1/2 bg-white/80" />
    <Skeleton class="h-6 w-full md:w-2/3 bg-white/80" />
    <Skeleton class="h-10 w-32 rounded-full bg-white/80" />
  </div>
  <div class="absolute inset-0 z-10 bg-neutral-300 animate-pulse"></div>
</section>
