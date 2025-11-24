<script lang="ts">
	import Slider from '$lib/components/home/Slider.svelte';
	import Menutab from '$lib/components/home/Menutab.svelte';
	import ProductBanner from '$lib/components/products/ProductBanner.svelte';
	import type { PageData } from './$types';
	import type { ArticleItem } from '$lib/types';

	let { data }: { data: PageData } = $props();

	const articleItems: ArticleItem[] = [
		{
			id: '1',
			imageUrl: '/1101.webp',
			title: 'ระแนงไวนิล AMIGO 1',
			description: 'บริการลูกค้าการนำเข้าธุรกิจค้าส่งมอบองค์กรการบรรลุเป้าหมายโทรบัญชีงบประมาณ',
			linkUrl: '#'
		},
		{
			id: '2',
			imageUrl: '/1103.webp',
			title: 'ระแนงไวนิล AMIGO 2',
			description: 'บริการลูกค้าการนำเข้าธุรกิจค้าส่งมอบองค์กรการบรรลุเป้าหมายโทรบัญชีงบประมาณ',
			linkUrl: '#'
		},
		{
			id: '3',
			imageUrl: '/1102.webp',
			title: 'ระแนงไวนิล AMIGO 3',
			description: 'บริการลูกค้าการนำเข้าธุรกิจค้าส่งมอบองค์กรการบรรลุเป้าหมายโทรบัญชีงบประมาณ',
			linkUrl: '#'
		},
		{
			id: '4',
			imageUrl: '/1103.webp',
			title: 'ระแนงไวนิล AMIGO 4',
			description: 'บริการลูกค้าการนำเข้าธุรกิจค้าส่งมอบองค์กรการบรรลุเป้าหมายโทรบัญชีงบประมาณ',
			linkUrl: '#'
		},
		{
			id: '5',
			imageUrl: '/1101.webp',
			title: 'ระแนงไวนิล AMIGO 5',
			description: 'บริการลูกค้าการนำเข้าธุรกิจค้าส่งมอบองค์กรการบรรลุเป้าหมายโทรบัญชีงบประมาณ',
			linkUrl: '#'
		}
	];
</script>

{#if data.banner}
	<ProductBanner banner={data.banner} />
{/if}
<Menutab />
<div
	class="mx-auto flex max-w-7xl flex-col gap-16 p-6 px-6 py-8 font-sans md:gap-24 md:px-8 md:py-16"
>
	<Slider sectionTitle="ผลงานติดตั้งระแนงไวนิล" sectionSubtitle="ผลงาน" articles={articleItems} />
	<div>
		<p class="text-neutral-600">ผลงาน</p>
		<h2 class="mt-1 mb-2 text-4xl leading-tight font-bold text-neutral-900">รีวิวจากลูกค้า</h2>
	</div>
</div>
