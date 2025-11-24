<script lang="ts">
	import type { Banner } from '$lib/types';
	import Image from '$lib/components/ui/Image.svelte';

	interface Props {
		banner: Banner;
		fullScreen?: boolean;
	}

	let { banner, fullScreen }: Props = $props();
</script>

<section
	class={`relative flex ${fullScreen ? 'min-h-screen' : 'h-full'} -mt-16 min-w-screen items-end font-sans md:-mt-20`}
>
	<div class="z-20 flex w-full flex-col p-6 pt-96 text-white md:max-w-7xl lg:mx-auto lg:mb-4">
		<h1 class="text-start text-base">{banner.subtitle}</h1>
		<h2 class="text-start text-3xl font-semibold">
			{banner.title}
		</h2>
		<p class="my-2">
			{banner.description}
		</p>
		<a
			href="https://lin.ee/8BsKFek"
			target="_blank"
			class="w-fit rounded-full bg-white px-4 py-2 text-black"
		>
			สั่งซื้อสินค้า
		</a>
	</div>
	<Image
		src={banner.imageUrl}
		alt={banner.title}
		sizes="100vw"
		class="absolute inset-0 z-10 h-full w-full object-cover brightness-65"
	/>
</section>
