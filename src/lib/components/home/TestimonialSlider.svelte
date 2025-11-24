<script lang="ts">
  import { onMount } from 'svelte';
  import { ArrowLeft, ArrowRight } from 'lucide-svelte';

  interface Slide {
    category: string;
    title: string;
    description: string;
    image: string;
  }

  const slides: Slide[] = [
    {
      category: "สินค้าใหม่",
      title: "ระแนงไวนิล วีจีเวนโต้",
      description: "บริการลูกค้าการนำเข้าธุรกิจค้าส่งมอบองค์กรการบรรลุเป้าหมายโทรบัญชีงบประมาณ",
      image: "/1101.webp"
    },
    {
      category: "สินค้าแนะนำ",
      title: "ระแนงไวนิล อมิโก้",
      description: "คุณภาพระดับพรีเมียม ทนทาน ติดตั้งง่าย เหมาะสำหรับทุกโครงการ",
      image: "/1103.webp"
    },
    {
      category: "ยอดนิยม",
      title: "ระแนงไวนิล เชอร่า",
      description: "ดีไซน์สวยงาม เหมาะกับบ้านสไตล์โมเดิร์น ราคาคุ้มค่า",
      image: "/1102.webp"
    },
    {
      category: "สินค้าพิเศษ",
      title: "ระแนงไวนิล พรีเมียม",
      description: "วัสดุคุณภาพสูง เกรดพรีเมียม สำหรับโครงการพิเศษ",
      image: "/1101.webp"
    },
    {
      category: "โปรโมชั่น",
      title: "ระแนงไวนิล ราคาพิเศษ",
      description: "โปรโมชั่นพิเศษ ลดราคาสูงสุด พร้อมบริการติดตั้ง",
      image: "/1103.webp"
    }
  ];

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

<section class="w-full max-w-7xl mx-auto">
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    <!-- Left Column - Header & Controls -->
    <div class="flex flex-col justify-between h-full md:col-span-1">
      <div class="flex flex-col gap-4">
        <div class="flex items-center gap-2">
          <p class='text-neutral-600'>ระแนงไวนิล วีจีเวนโต้</p>
        </div>
        <h2 class="text-4xl font-bold text-gray-900">
          สร้างความเป็นส่วนตัวให้กับบ้านคุณ
        </h2>
      </div>

      <!-- Navigation Buttons -->
      <div class="flex gap-3 mt-8">
        <button
          onclick={() => scroll('left')}
          disabled={!canScrollLeft}
          class={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all ${!canScrollLeft
            ? 'border-gray-300 text-gray-300 cursor-not-allowed'
            : 'border-gray-800 text-gray-800 hover:bg-gray-100'
            }`}
          aria-label="Previous testimonial"
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
          aria-label="Next slide"
        >
          <ArrowRight class="w-5 h-5" />
        </button>
      </div>
    </div>

    <!-- Right Column - Scrollable Carousel -->
    <div class="relative w-full md:col-span-2">
      <div
        bind:this={scrollContainerRef}
        class="flex gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth"
      >
        {#each slides as slide, index (index)}
          <div
            class="flex-shrink-0 w-full snap-start"
          >
            <div class="flex w-full h-[450px] overflow-hidden relative rounded-2xl">
              <div class="flex flex-col z-20 p-6 text-white bottom-0 left-0 absolute">
                <h1 class="text-start text-base">{slide.category}</h1>
                <h1 class="text-start text-3xl font-semibold">
                  {slide.title}
                </h1>
                <p class="mt-2">
                  {slide.description}
                </p>
              </div>
              <img
                src={slide.image}
                alt={slide.title}
                class="absolute inset-0 w-full h-full object-cover brightness-60"
              />
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>
