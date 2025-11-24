<script lang="ts">
  import { onMount } from 'svelte';
  import { ArrowUpRight, ArrowLeft, ArrowRight } from 'lucide-svelte';

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

<div class='w-full py-8 md:py-16 max-w-7xl mx-auto'>
  <div class='flex flex-col items-center justify-center gap-6'>
    <span
      class="flex items-start justify-between w-full"
      id="product"
    >
      <div>
        <p class='text-neutral-600'>บทความ</p>
        <h2 class="text-4xl font-bold text-neutral-900 mb-2 mt-1 leading-tight">
          ข่าวสารและโปรโมชั่น
        </h2>
        <!-- Navigation Buttons -->
        <div class="flex gap-3 mt-4">
          <button
            onclick={() => scroll('left')}
            disabled={!canScrollLeft}
            class={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all ${!canScrollLeft
              ? 'border-gray-300 text-gray-300 cursor-not-allowed'
              : 'border-gray-800 text-gray-800 hover:bg-gray-100'
              }`}
            aria-label="Previous article"
          >
            <ArrowLeft class="w-5 h-5" />
          </button>
          <button
            onclick={() => scroll('right')}
            disabled={!canScrollRight}
            class={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all ${!canScrollRight
              ? 'border-gray-300 text-gray-300 cursor-not-allowed'
              : 'border-gray-800 text-gray-800 hover:bg-gray-100'
              }`}
            aria-label="Next article"
          >
            <ArrowRight class="w-5 h-5" />
          </button>
        </div>
      </div>
      <h1 class="text-start text-base text-neutral-500">ดูทั้งหมด</h1>
    </span>
    <section bind:this={scrollContainerRef} class="flex items-start gap-6 overflow-x-auto no-scrollbar brightness-90 w-full">
      <div class="w-76" id="product-amigo">
        <div class="w-76 h-96 mb-4 rounded-sm overflow-hidden relative">
          <img
            src="/1101.webp"
            alt="Product 1"
            class="object-cover w-full h-full"
          />
        </div>
        <p class="font-semibold text-neutral-700">ระแนงไวนิล AMIGO</p>
        <p class="text-neutral-400 text-sm mb-2">
          บริการลูกค้าการนำเข้าธุรกิจค้าส่งมอบองค์กรการบรรลุเป้าหมายโทรบัญชีงบประมาณ
        </p>
        <a href="#" class="text-sm font-medium text-neutral-600">
          ดูรายละเอียด
          <ArrowUpRight class="inline-block ml-1 h-4 w-4" />
        </a>
      </div>

      <div class="w-76">
        <div class="w-76 h-86 mb-4 rounded-sm overflow-hidden relative">
          <img
            src="/1103.webp"
            alt="Product 1"
            class="object-cover w-full h-full"
          />
        </div>
        <p class="font-semibold text-neutral-700">ระแนงไวนิล AMIGO</p>
        <p class="text-neutral-400 text-sm mb-2">
          บริการลูกค้าการนำเข้าธุรกิจค้าส่งมอบองค์กรการบรรลุเป้าหมายโทรบัญชีงบประมาณ
        </p>
        <a href="#" class="text-sm font-medium text-neutral-600">
          ดูรายละเอียด
          <ArrowUpRight class="inline-block ml-1 h-4 w-4" />
        </a>
      </div>

      <div class="w-76">
        <div class="w-76 h-64 mb-4 rounded-sm overflow-hidden relative">
          <img
            src="/1102.webp"
            alt="Product 1"
            class="object-cover w-full h-full"
          />
        </div>
        <p class="font-semibold text-neutral-700">ระแนงไวนิล AMIGO</p>
        <p class="text-neutral-400 text-sm mb-2">
          บริการลูกค้าการนำเข้าธุรกิจค้าส่งมอบองค์กรการบรรลุเป้าหมายโทรบัญชีงบประมาณ
        </p>
        <a href="#" class="text-sm font-medium text-neutral-600">
          ดูรายละเอียด
          <ArrowUpRight class="inline-block ml-1 h-4 w-4" />
        </a>
      </div>

      <div class="w-76">
        <div class="w-76 h-92 mb-4 rounded-sm overflow-hidden relative">
          <img
            src="/1103.webp"
            alt="Product 1"
            class="object-cover w-full h-full"
          />
        </div>
        <p class="font-semibold text-neutral-700">ระแนงไวนิล AMIGO</p>
        <p class="text-neutral-400 text-sm mb-2">
          บริการลูกค้าการนำเข้าธุรกิจค้าส่งมอบองค์กรการบรรลุเป้าหมายโทรบัญชีงบประมาณ
        </p>
        <a href="#" class="text-sm font-medium text-neutral-600">
          ดูรายละเอียด
          <ArrowUpRight class="inline-block ml-1 h-4 w-4" />
        </a>
      </div>


      <div class="w-76">
        <div class="w-76 h-92 mb-4 rounded-sm overflow-hidden relative">
          <img
            src="/1101.webp"
            alt="Product 1"
            class="object-cover w-full h-full"
          />
        </div>
        <p class="font-semibold text-neutral-700">ระแนงไวนิล AMIGO</p>
        <p class="text-neutral-400 text-sm mb-2">
          บริการลูกค้าการนำเข้าธุรกิจค้าส่งมอบองค์กรการบรรลุเป้าหมายโทรบัญชีงบประมาณ
        </p>
        <a href="#" class="text-sm font-medium text-neutral-600">
          ดูรายละเอียด
          <ArrowUpRight class="inline-block ml-1 h-4 w-4" />
        </a>
      </div>
    </section>
  </div>
</div>
