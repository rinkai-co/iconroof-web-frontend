<script lang="ts">
  import type { Banner } from "$lib/types";

  interface Props {
    banner: Banner;
    fullScreen?: boolean;
  }

  let { banner, fullScreen }: Props = $props();
</script>

<section class={`flex relative ${fullScreen ? 'min-h-screen' : 'h-full'} min-w-screen items-end -mt-16 md:-mt-20 font-sans`}>
    <div class="flex flex-col z-20 p-6 text-white md:max-w-7xl lg:mx-auto w-full lg:mb-4 pt-96">
        <h1 class="text-start text-base">{banner.subtitle}</h1>
        <h2 class="text-start text-3xl font-semibold">
            {banner.title}
        </h2>
        <p class="my-2">
            {banner.description}
        </p>
        <a
            href={banner.linkUrl}
            class="bg-white text-black px-4 py-2 rounded-full w-fit"
        >
            ดูรายละเอียด
        </a>
    </div>
    <img
        src={banner.imageUrl}
        alt={banner.title}
        class="absolute inset-0 w-full h-full object-cover brightness-65 z-10"
    />
</section>
