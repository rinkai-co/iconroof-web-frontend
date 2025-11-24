<script lang="ts">
	import { onMount } from 'svelte';
	import { ArrowUpRight, ArrowLeft, ArrowRight } from 'lucide-svelte';
	import type { ArticleItem } from '$lib/types';

	const { sectionTitle, sectionSubtitle, articles = [] } = $props<{
		sectionTitle: string;
		sectionSubtitle: string;
		articles?: ArticleItem[];
	}>();

	let scrollContainerRef: HTMLElement | null = null;
	let canScrollLeft = $state(false);
	let canScrollRight = $state(true);

	const checkScroll = () => {
		if (scrollContainerRef) {
			const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef;
			canScrollLeft = scrollLeft > 0;
			canScrollRight = scrollLeft < scrollWidth - clientWidth - 1;
		}
	};

	onMount(() => {
		checkScroll();
		if (scrollContainerRef) {
			scrollContainerRef.addEventListener('scroll', checkScroll);
			return () => scrollContainerRef?.removeEventListener('scroll', checkScroll);
		}
	});

	const scroll = (direction: 'left' | 'right') => {
		if (scrollContainerRef) {
			const scrollAmount = 320; // Approximate width of one card plus gap
			scrollContainerRef.scrollBy({
				left: direction === 'left' ? -scrollAmount : scrollAmount,
				behavior: 'smooth'
			});
		}
	};
</script>

<div class="mx-auto w-full max-w-7xl">
	<div class="flex flex-col items-center justify-center gap-6">
		<span class="flex w-full items-start justify-between" id="product">
			<div>
				<p class="text-neutral-600">{sectionSubtitle}</p>
				<h2 class="mt-1 mb-2 text-4xl leading-tight font-bold text-neutral-900">
					{sectionTitle}
				</h2>
				<!-- Navigation Buttons -->
				<div class="mt-4 flex gap-3">
					<button
						onclick={() => scroll('left')}
						disabled={!canScrollLeft}
						class={`flex h-12 w-12 items-center justify-center rounded-full border-2 transition-all ${
							!canScrollLeft
								? 'cursor-not-allowed border-gray-300 text-gray-300'
								: 'border-gray-800 text-gray-800 hover:bg-gray-100'
						}`}
						aria-label="Previous article"
					>
						<ArrowLeft class="h-5 w-5" />
					</button>
					<button
						onclick={() => scroll('right')}
						disabled={!canScrollRight}
						class={`flex h-12 w-12 items-center justify-center rounded-full border-2 transition-all ${
							!canScrollRight
								? 'cursor-not-allowed border-gray-300 text-gray-300'
								: 'border-gray-800 text-gray-800 hover:bg-gray-100'
						}`}
						aria-label="Next article"
					>
						<ArrowRight class="h-5 w-5" />
					</button>
				</div>
			</div>
			<h1 class="text-start text-base text-neutral-500">ดูทั้งหมด</h1>
		</span>
		<section
			bind:this={scrollContainerRef}
			class="no-scrollbar flex w-full items-start gap-6 overflow-x-auto brightness-90"
		>
			{#each articles as article (article.id)}
				<div class="w-76" id="product-{article.id}">
					<div class="relative mb-4 h-96 w-76 overflow-hidden rounded-sm">
						<img src={article.imageUrl} alt={article.title} class="h-full w-full object-cover" />
					</div>
					<p class="font-semibold text-neutral-700">{article.title}</p>
					<p class="mb-2 text-sm text-neutral-400">
						{article.description}
					</p>
					<a href={article.linkUrl} class="text-sm font-medium text-neutral-600">
						ดูรายละเอียด
						<ArrowUpRight class="ml-1 inline-block h-4 w-4" />
					</a>
				</div>
			{/each}
		</section>
	</div>
</div>
