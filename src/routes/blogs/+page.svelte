<script lang="ts">
	import Slider from '$lib/components/home/Slider.svelte';
	import Menutab from '$lib/components/home/Menutab.svelte';
	import ProductBanner from '$lib/components/products/ProductBanner.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

{#if data.banner}
	<ProductBanner banner={data.banner} />
{/if}
<Menutab />
<div
	class="mx-auto flex max-w-7xl flex-col gap-16 p-6 px-6 py-8 font-sans md:gap-24 md:px-8 md:py-16"
>
	<Slider sectionTitle="Default Title" sectionSubtitle="Default Subtitle" articles={[]} />
	<div>
		<p class="text-neutral-600">ผลงาน</p>
		<h2 class="mt-1 mb-2 text-4xl leading-tight font-bold text-neutral-900">รีวิวจากลูกค้า</h2>
	</div>
</div>
