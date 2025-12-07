<script>
  import Image from '$lib/components/ui/Image.svelte';
</script>

<main class="flex font-sans flex-col items-center justify-start min-h-screen bg-[var(--background)] text-[var(--foreground)] max-w-7xl mx-auto pt-16 md:pt-20">
  <section class="flex relative h-[60vh] w-full items-end rounded-2xl overflow-hidden">
    <div class="flex flex-col z-20 p-6 text-white w-full lg:mb-4">
      <p class="text-start text-base mb-2">ระแนงไวนิล Amigo</p>
      <h1 class="text-start text-3xl font-semibold mb-4">
        สร้างความเป็นส่วนตัวให้กับบ้าน
      </h1>
      <p class="my-2 max-w-2xl">
        บริการลูกค้าการนำเข้าธุรกิจค้าส่งมอบองค์กรการบรรลุเป้าหมายโทรบัญชีงบประมาณ
      </p>
      <button
        type="button"
        class="bg-white text-black px-6 py-2 rounded-full w-fit font-medium hover:bg-neutral-100 transition-colors"
      >
        ดูรายละเอียด
      </button>
    </div>
    <Image
      src="/src/lib/assets/images/product/1112.webp"
      alt="ระแนงไวนิล Amigo สร้างความเป็นส่วนตัวให้กับบ้าน"
      sizes="100vw"
      class="absolute inset-0 w-full h-full object-cover brightness-65 z-10"
    />
  </section>
  <div class="w-full mt-8 px-4 md:px-0">
    <div
      class="flex items-start justify-between w-full py-6 border-b border-neutral-200"
      id="product"
    >
      <div>
        <h2 class="text-start text-neutral-600 dark:text-neutral-400 text-sm mb-2">สินค้า</h2>
        <p class="text-start text-xl text-neutral-800 dark:text-neutral-200 font-semibold">
          เพื่มความเป็นส่วนตัวให้กับบ้านคุณ
        </p>
      </div>
      <a href="/products" class="text-start text-base text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">
        ดูทั้งหมด
      </a>
    </div>
  </div>
</main>
