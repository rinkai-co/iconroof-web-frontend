<script lang="ts">
  import type { BannerInfo } from "$lib/types";
  import Image from "$lib/components/ui/Image.svelte";

  interface Props {
    bannerInfo: BannerInfo;
  }

  let { bannerInfo }: Props = $props();
</script>

<div class="w-full font-sans max-w-7xl mx-auto rounded-xl overflow-hidden">
  <section class="flex relative min-h-full w-full items-center">
    <div class="flex flex-col z-20 items-center px-6 py-48 text-white w-full max-w-7xl mx-auto gap-4">
      <div class="flex flex-col gap-2 items-center">
        <h1 class="text-center md:text-start text-4xl font-semibold">
          {bannerInfo.title}
        </h1>
        <p>{bannerInfo.description}</p>
      </div>
      <a
        href={bannerInfo.linkUrl}
        class="bg-white text-black px-4 py-2 rounded-full w-fit"
      >
        {bannerInfo.linkText}
      </a>
    </div>
    <Image
      src={bannerInfo.imageUrl}
      alt={bannerInfo.title}
      class="absolute inset-0 w-full h-full object-cover brightness-65 z-10 rounded-xl"
    />
  </section>
</div>
