<script lang="ts">
	import { onMount } from 'svelte';
	import { ArrowLeft, ArrowRight } from 'lucide-svelte';
	import type { Testimonial } from '$lib/types';

	interface Props {
		testimonials: Testimonial[];
	}

	let { testimonials }: Props = $props();

	let scrollContainerRef: HTMLDivElement | null = null;
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
			const scrollAmount = scrollContainerRef.clientWidth; // Scroll one full card width
			scrollContainerRef.scrollBy({
				left: direction === 'left' ? -scrollAmount : scrollAmount,
				behavior: 'smooth'
			});
		}
	};
</script>

<section class="mx-auto w-full max-w-7xl">
	<div class="grid grid-cols-1 gap-6 md:grid-cols-3">
		<!-- Left Column - Header & Controls -->
		<div class="flex h-full flex-col justify-between md:col-span-1">
			<div class="flex flex-col gap-4">
				<div class="flex items-center gap-2">
					<p class="text-neutral-600">ระแนงไวนิล Amigo</p>
				</div>
				<h2 class="text-4xl font-bold text-gray-900">สร้างความเป็นส่วนตัวให้กับบ้านคุณ</h2>
			</div>

			<!-- Navigation Buttons -->
			<div class="mt-8 flex gap-3">
				<button
					onclick={() => scroll('left')}
					disabled={!canScrollLeft}
					class={`flex h-12 w-12 items-center justify-center rounded-full border-2 transition-all ${
						!canScrollLeft
							? 'cursor-not-allowed border-gray-300 text-gray-300'
							: 'border-gray-800 text-gray-800 hover:bg-gray-100'
					}`}
					aria-label="Previous testimonial"
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
					aria-label="Next slide"
				>
					<ArrowRight class="h-5 w-5" />
				</button>
			</div>
		</div>

		<!-- Right Column - Scrollable Carousel -->
		<div class="relative w-full md:col-span-2">
			<div
				bind:this={scrollContainerRef}
				class="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth"
			>
				{#each testimonials as testimonial (testimonial.id)}
					<div class="w-full flex-shrink-0 snap-start">
						<div class="relative flex h-[450px] w-full overflow-hidden rounded-2xl">
							<div class="absolute bottom-0 left-0 z-20 flex flex-col p-6 text-white">
								<h1 class="text-start text-3xl font-semibold">
									{testimonial.title}
								</h1>
								<p class="mt-2">
									{testimonial.description}
								</p>
							</div>
							<img
								src={testimonial.imageUrl}
								alt={testimonial.title}
								class="absolute inset-0 h-full w-full object-cover brightness-60"
							/>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
