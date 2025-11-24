<script lang="ts">
  import type { Brand } from "$lib/types";
  import Image from "$lib/components/ui/Image.svelte";

  interface Props {
    brands: Brand[];
  }

  let { brands }: Props = $props();
</script>

<div class='w-full max-w-7xl mx-auto'>
  <div class='flex flex-col items-center justify-center gap-6'>
    <div class='text-center'>
      <h1 class='text-3xl font-bold mb-4'>เลือกดูตามแบรนด์</h1>
    </div>
    <div class="flex gap-4 md:gap-6">
      {#each brands as brand (brand.id)}
        <a href={brand.linkUrl} class="flex flex-col items-center">
          <Image
            src={brand.imageUrl}
            alt=""
            width="144"
            height="144"
            class="mb-4 w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 object-cover rounded-md flex-shrink-0"
          />
          <p class="text-sm font-medium">{brand.name}</p>
        </a>
      {/each}
    </div>
  </div>
</div>
